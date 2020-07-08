import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import defaultData from './defaultData.json';

// see docs on https://github.com/reuters-graphics/graphics-atlas-client
import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
import { interpolate, interpolateHsl, interpolateHcl } from 'd3';
const atlastClient = new AtlasMetadataClient();

const dateParse = d3.timeParse('%Y-%m-%d');
const dateFormat = d3.timeFormat('%b %e');
const dateFormat_tt = d3.timeFormat('%B %e');
const numberFormat_tt = d3.format(',');

class CountryLockdownIndicatorStrips extends ChartComponent {
    defaultProps = {
        locale: 'en',
        countryISO2: 'IN',
        dataParams: {
            date: 'date',
            index: 'c1',
            steps: 2, // stepValue = 0, 1...
            stepValue: 'flag',
        },
        height: 50,
        margin: {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
        },
        valign: 'center', // start, center, baseline
        baseColor: '#ECEFF4',
        // stripColor: {
        //     0: '#ECEFF4',
        //     1: '#d1eeea',
        //     2: '#ffe47f',
        //     3: '#a50f15',
        // },
    };

    defaultData = defaultData;

    draw() {
        const data = this.data();
        const props = this.props();
        const node = this.selection().node();

        // get country details from AtlasClient from ISO-2
        props.country = atlastClient.getCountry(props.countryISO2);

        const {
            width,
        } = node.getBoundingClientRect();

        const transition = d3.transition()
            .duration(750);

        // main chart container
        const chartDiv = this.selection()
            .appendSelect('div') // see docs in ./utils/d3.js
            .attr('class', 'CountryLockdownIndicatorStrips')
            .style('width', `${width}px`)
            .style('height', `${props.height}px`)
            .appendSelect('div')
            .style('transform', `translate(${props.margin.left}px, ${props.margin.top}px)`);

        // set scales
        const yScale = d3.scaleLinear()
            .domain([0, props.dataParams.steps - 1])
            .range([props.height - props.margin.bottom, props.margin.top]);

        const xScale = d3.scaleBand()
            .domain(data.map(d => dateParse(d[props.dataParams.date])))
            .range([props.margin.left, width - props.margin.right])
            .padding(0);

        const colorDomain = props.stripColor ? (Object.keys(props.stripColor)).map(d => +d) : d3.extent(data.map(d => d[props.dataParams.index]));

        const colorRange = props.stripColor ? colorDomain.map(d => props.stripColor[`${d}`]) : ['#cccccc', '#333333']

        const colorScale = d3.scaleLinear()
            .domain(colorDomain)
            .range(colorRange)
            .interpolate(interpolateHcl);

        // make bars
        const bars = chartDiv.appendSelect('div.bars-container')
            .style('display', 'flex')
            .style('align-items', `${props.valign}`)
            .selectAll('.bar')
            .data(data, (d, i) => d[props.dataParams.date]); // for smooth data updation

        bars.enter().append('div')
            .attr('class', d => `bar ${d[props.dataParams.date]}`)
            .style('height', d => {
                const stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;
                const step = d[props.dataParams.stepValue] + 1;
                return d[props.dataParams.index] ? (step ? step * stepSize + 'px' : stepSize + 'px') : stepSize + 'px';
            })
            .style('width', xScale.bandwidth() + 'px')
            .style('display', 'inline-block')
            .style('background', props.baseColor)
            .style('background', d => {
                let val = parseFloat(d[props.dataParams.index]);
                console.log((val === null) || (isNaN(val)))
                return (val !== null) && !(isNaN(val)) ? colorScale(val) : props.baseColor;
            });

        // const circles = g.selectAll('circle')
        //   .data(data, (d, i) => d[props.dataParams.date]);

        // circles
        //   .style('fill', props.fill)
        //   .style('stroke', props.stroke);

        // circles.enter().append('circle')
        //   .style('fill', props.fill)
        //   .style('stroke', props.stroke)
        //   .style('stroke-width', props.strokeWidth)
        //   .attr('cy', props.height / 2)
        //   .attr('cx', (d, i) =>
        //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)
        //   )
        //   .merge(circles)
        //   .transition(transition)
        //   .attr('cx', (d, i) =>
        //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)
        //   )
        //   .attr('r', d => d / 2);

        // circles.exit()
        //   .transition(transition)
        //   .attr('r', 0)
        //   .remove();

        return this;
    }
}
// console.log(this.defaultProps);
export default CountryLockdownIndicatorStrips;