import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import defaultData from './defaultData.json';
import { interpolateHcl } from 'd3';
import d3SelectionMulti from 'd3-selection-multi';
// see docs on https://github.com/reuters-graphics/graphics-atlas-client
// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
// const atlastClient = new AtlasMetadataClient();

const dateParse = d3.timeParse('%Y-%m-%d');
const dateFormat = d3.timeFormat('%b %e');
const dateFormat_tt = d3.timeFormat('%B %e');
const numberFormat_tt = d3.format(',');

class CountryLockdownIndicatorStrips extends ChartComponent {
    defaultProps = {
        dataParams: {
            date: 'date',
            index: 'c1',
            steps: 2, // stepValue = 0, 1...
            stepValue: 'flag',
        },
        height: 250,
        margin: {
            top: 10,
            right: 0,
            bottom: 10,
            left: 0,
        },
        valign: 'center', // start, center, baseline
        baseColor: '#ECEFF4',
        stripColor: { // should be numeric values that are mapped from the data
            0: '#d1eeea',
            1: '#ffe47f',
            2: 'orange',
            3: '#a50f15',
        },
        legendItems: { // should contain items from stripColor
            'null': 'no data',
            'stepLegend': {
                0: 'targeted',
                1: 'nationwide'
            },
            'indexLegend': {
                0: 'no measures',
                1: 'recommend closing',
                2: 'require closing (only some levels or categories, eg just high school, or just public schools)',
                3: 'require closing all levels'
            },
        }
    };

    defaultData = defaultData;

    draw() {
        const data = this.data();
        const props = this.props();
        const node = this.selection().node();

        // get country details from AtlasClient from ISO-2
        // props.country = atlastClient.getCountry(props.countryISO2);

        const {
            width
        } = node.getBoundingClientRect();

        const transition = d3.transition()
            .duration(750);

        // main chart container
        const chartDiv = this.selection()
            .appendSelect('div') // see docs in ./utils/d3.js
            .attr('class', `CountryLockdownIndicatorStrips`)
            .style('width', `${width}px`)
            .style('height', `auto`)
            .appendSelect('div')
            .styles({
                'margin-top': `${props.margin.top}px`,
                'margin-right': `${props.margin.right}px`,
                'margin-bottom': `${props.margin.bottom}px`,
                'margin-left': `${props.margin.left}px`,
            });

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

        const stripheight = props.legendItems ? (props.height - props.margin.top - props.margin.bottom) * 0.2 : (props.height - props.margin.top - props.margin.bottom);

        bars.enter().append('div')
            .attr('class', d => `bar ${d[props.dataParams.date]}`)
            .style('display', 'inline-block')
            .style('height', d => {
                const stepSize = (stripheight) / props.dataParams.steps;
                const step = d[props.dataParams.stepValue] + 1;
                return d[props.dataParams.index] ? (step ? step * stepSize + 'px' : stepSize + 'px') : stepSize + 'px';
            })
            .style('width', xScale.bandwidth() + 'px')
            .style('background', d => {
                let val = parseFloat(d[props.dataParams.index]);
                return (val !== null) && !(isNaN(val)) ? colorScale(val) : props.baseColor;
            })
            .merge(bars)
            .transition(transition)
            .style('display', 'inline-block')
            .style('height', d => {
                const stepSize = (stripheight) / props.dataParams.steps;
                const step = d[props.dataParams.stepValue] + 1;
                return d[props.dataParams.index] ? (step ? step * stepSize + 'px' : stepSize + 'px') : stepSize + 'px';
            })
            .style('width', xScale.bandwidth() + 'px')
            .style('background', d => {
                let val = parseFloat(d[props.dataParams.index]);
                return (val !== null) && !(isNaN(val)) ? colorScale(val) : props.baseColor;
            });

        bars.exit()
            .transition(transition)
            .attr('height', 0)
            .remove();


        if (props.legendItems) {
            const indexLegendItems = [];
            (Object.keys(props.legendItems.indexLegend)).forEach(d => {
                let item = {
                    key: d,
                    value: props.legendItems.indexLegend[d]
                }
                indexLegendItems.push(item);
            });
            if (props.legendItems['null']) {
                indexLegendItems.push({
                    key: 'null',
                    value: props.legendItems['null']
                })
            }
            const legendWidth = (width - props.margin.right - props.margin.left) / indexLegendItems.length;


            // make legend
            const indexLegend = chartDiv.appendSelect('div.legend-container')
                // .style('align-items', `${props.valign}`)
                .selectAll('.legend-div')
                .data(indexLegendItems); // for smooth data updation

            indexLegend.enter().append('div')
                .attr('class', `legend-div indexLegend`)
                .style('display', 'flex')
                .style('align-items', `start`)
                // .style('width', `${legendWidth}px`)
                .html(d => {
                    let color = (+d.key !== null) && !(isNaN(+d.key)) ? props.stripColor[+d.key] : props.baseColor;
                    return `<span style="width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: ${color}"></span> <p style="margin:0 0 0 0.5rem;">${d.value}</p>`
                })
                .merge(indexLegend)
                // .style('width', `${legendWidth}px`)
                .html(d => {
                    let color = (+d.key !== null) && !(isNaN(+d.key)) ? props.stripColor[+d.key] : props.baseColor;
                    return `<span style="width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: ${color}"></span> <p style="margin:0 0 0 0.5rem;">${d.value}</p>`
                });

            indexLegend.exit()
                .transition(transition)
                .remove();


        }
        return this;
    }
}
// console.log(this.defaultProps);
export default CountryLockdownIndicatorStrips;