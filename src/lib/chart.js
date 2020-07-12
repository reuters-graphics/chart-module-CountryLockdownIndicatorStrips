/* eslint-disable no-trailing-spaces */
import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import { getDates, formatDateObject } from './utils/utils';
import defaultData from './defaultData.json';
import { interpolateHcl } from 'd3';
import d3SelectionMulti from 'd3-selection-multi';
// see docs on https://github.com/reuters-graphics/graphics-atlas-client
// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
// const atlastClient = new AtlasMetadataClient();

const dateParse = d3.timeParse('%Y-%m-%d');
const dateFormat = d3.timeFormat('%b %e');
// const dateFormat_tt = d3.timeFormat('%B %e');
// const numberFormat_tt = d3.format(',');

class CountryLockdownIndicatorStrips extends ChartComponent {
    defaultProps = {
      dateSeries: ['2019-12-31', '2020-07-08'], // yyyy-mm-dd format, end date not included
      dataParams: {
        date: 'date',
        index: 'c1',
        stepValue: 'flag',
        steps: 2, // stepValue = 0, 1...
      },
      height: 150,
      stripHeight: 50,
      margin: {
        top: 10,
        right: 18,
        bottom: 10,
        left: 18,
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
        null: 'no data',
        stepLegend: {
          0: 'targeted',
          1: 'nationwide',
        },
        indexLegend: {
          0: 'no measures',
          1: 'recommend closing',
          2: 'require closing on some levels',
          3: 'require closing all levels',
        },
      },
      axis: true,
      markDates: ['2019-12-31', '2020-03-25', '2020-07-07'], // yyyy-mm-dddd
    };

    defaultData = defaultData;

    draw() {
      const allData = this.data();
      const props = this.props();
      const node = this.selection().node();

      if (!props.dateSeries) {
        props.dateSeries = [dateParse(allData[0].date), dateParse(allData[allData.length - 1].date)];
      }
      const dateSeries = getDates(props.dateSeries[0], props.dateSeries[1]);   
      // console.log((dateSeries));

      // set data for the date series
      const data = dateSeries.map((d) => {
        const match = allData.find((e) => (e[props.dataParams.date]) === (formatDateObject(d)));
        if (match) {
          return match;
        } else {
          const obj = {};
          obj[props.dataParams.date] = formatDateObject(d);
          return obj;
        }
      }); 

      // get country details from AtlasClient from ISO-2
      // props.country = atlastClient.getCountry(props.countryISO2);

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
      // .style('height', `${props.height}px`)
        .appendSelect('div')
        .styles({
          'padding-top': `${props.margin.top}px`,
          'padding-right': `${props.margin.right}px`,
          'padding-bottom': `${props.margin.bottom}px`,
          'padding-left': `${props.margin.left}px`,
        });

      const stripheight = props.legendItems ? (props.stripHeight - props.margin.top) : (props.height - props.margin.top - props.margin.bottom);

      // set scales
      const yScale = d3.scaleLinear()
        .domain([0, props.dataParams.steps - 1])
        .range([stripheight, props.margin.top]);

      const xScale = d3.scaleBand()
        .domain(dateSeries)
        .range([0, width - props.margin.left - props.margin.right])
        .padding(0);

      const colorDomain = props.stripColor ? (Object.keys(props.stripColor)).map(d => +d) : d3.extent(data.map(d => d[props.dataParams.index]));

      const colorRange = props.stripColor ? colorDomain.map(d => props.stripColor[`${d}`]) : ['#cccccc', '#333333'];

      const colorScale = d3.scaleLinear()
        .domain(colorDomain)
        .range(colorRange)
        .interpolate(interpolateHcl);

      // make bars
      const bars = chartDiv.appendSelect('div.bars-container')
        .styles({
          display: 'flex',
          'align-items': `${props.valign}`,
        })
        .selectAll('.bar')
        .data(data, (d, i) => d[props.dataParams.date]); // for smooth data updation

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
          const val = parseFloat(d[props.dataParams.index]);
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
          const val = parseFloat(d[props.dataParams.index]);
          return (val !== null) && !(isNaN(val)) ? colorScale(val) : props.baseColor;
        });

      bars.exit()
        .transition(transition)
        .attr('height', 0)
        .remove();

      // add axis
      if (props.axis) {
        const markDates = props.markDates ? props.markDates.map(d => dateParse(d)) : [dateSeries[0], dateSeries.slice(-1)[0]];

        console.log(markDates);

        const xAxis = chartDiv.appendSelect('svg')
          .attr('width', width - props.margin.left - props.margin.right)
          .attr('height', 25)
          .attr('transform', 'translate(0, 0)');

        xAxis.appendSelect('g.axis-x')
          .attr('class', 'axis-x axis')
          .transition(transition)
          .attr('transform', 'translate(0,0)')
          .call(
            d3.axisBottom(xScale)
              .tickValues(markDates)
              .tickFormat(dateFormat)
          );
      }

      // chart legend
      if (props.legendItems) {
        const indexLegendItems = [];
        (Object.keys(props.legendItems.indexLegend)).forEach(d => {
          const item = {
            key: d,
            value: props.legendItems.indexLegend[d],
          };
          indexLegendItems.push(item);
        });
        if (props.legendItems.null) {
          indexLegendItems.push({
            key: 'null',
            value: props.legendItems.null,
          });
        }
        const legendWidth = (width - props.margin.right - props.margin.left) / indexLegendItems.length;

        // make legend
        const legendDiv = chartDiv.appendSelect('div.legend-container');

        const indexLegend = legendDiv.appendSelect('div.legend.indexLegend')
        // .style('align-items', `${props.valign}`)
          .selectAll('.legend-item')
          .data(indexLegendItems); // for smooth data updation

        indexLegend.enter().append('div')
          .attr('class', 'legend-item')
          .styles({
            display: 'flex',
            'align-items': 'start',
          })
        // .style('width', `${legendWidth}px`)
          .html(d => {
            const color = (+d.key !== null) && !(isNaN(+d.key)) ? props.stripColor[+d.key] : props.baseColor;
            return `<span style="width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: ${color}"></span> <p style="margin:0 0 0 0.5rem;">${d.value}</p>`;
          })
          .merge(indexLegend)
          .styles({
            display: 'flex',
            'align-items': 'start',
          })
          .style('width', `${legendWidth}px`)
          .html(d => {
            const color = (+d.key !== null) && !(isNaN(+d.key)) ? props.stripColor[+d.key] : props.baseColor;
            return `<span style="width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: ${color}"></span> <p style="margin:0 0 0 0.5rem;">${d.value}</p>`;
          });

        indexLegend.exit()
          .transition(transition)
          .remove();

        if (props.legendItems.stepLegend) {
          // step legend stuff
          const stepLegendItems = [];
          (Object.keys(props.legendItems.stepLegend)).forEach(d => {
            const item = {
              key: d,
              value: props.legendItems.stepLegend[d],
            };
            stepLegendItems.push(item);
          });
          console.log(stepLegendItems);

          const stepLegend = legendDiv.appendSelect('div.legend.stepLegend')
            .selectAll('.legend-item')
            .data(stepLegendItems); // for smooth data updation

          stepLegend.enter().append('div')
            .attr('class', 'legend-item')
            .styles({
              display: 'flex',
              'align-items': 'center',
            })
            .html((d, i) => {
              const stepSize = (stripheight) / stepLegendItems.length;
              return `<span style="width:${8}px; height:${((+d.key) + 1) * stepSize}px; background:transparent; border: 0.5px solid #333333;"></span><p style="margin:0 0 0 0.5rem;">${d.value}</p>`;
            })
            .merge(stepLegend)
            .styles({
              display: 'flex',
              'align-items': 'center',
            })
            .html((d, i) => {
              const stepSize = (stripheight) / stepLegendItems.length;
              return `<span style="width:${8}px; height:${((+d.key) + 1) * stepSize}px; background:transparent; border: 0.5px solid #333333;"></span><p style="margin:0 0 0 0.5rem;">${d.value}</p>`;
            });

          stepLegend.exit()
            .transition(transition)
            .remove();
        }
      }
      return this;
    }
}
// console.log(this.defaultProps);
export default CountryLockdownIndicatorStrips;
