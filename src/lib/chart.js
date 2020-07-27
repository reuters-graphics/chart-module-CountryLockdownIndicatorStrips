import { formatDateObject, getDates } from './utils/utils';

/* eslint-disable no-trailing-spaces */
import ChartComponent from './base/ChartComponent';
// import d3SelectionMulti from 'd3-selection-multi';
import D3Locale from '@reuters-graphics/d3-locale';
import d3 from './utils/d3';
import { interpolateHcl } from 'd3';

// see docs on https://github.com/reuters-graphics/graphics-atlas-client
// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
// const atlastClient = new AtlasMetadataClient();

// const dateFormat_tt = d3.timeFormat('%B %e');
// const numberFormat_tt = d3.format(',');
const dateParse = d3.timeParse('%Y-%m-%d');

class CountryLockdownIndicatorStrips extends ChartComponent {
    defaultProps = {
      locale: 'en', // See docs https://github.com/reuters-graphics/d3-locale
      // dateSeries: ['2019-12-31', '2020-07-07'], // yyyy-mm-dd format
      // dataParams: {
      //   date: 'date',
      //   index: 'c1',
      //   stepValue: 'flag',
      //   steps: 2, // stepValue = 0, 1...
      // },
      height: 150,
      stripHeight: 50,
      margin: {
        top: 10,
        right: 18,
        bottom: 10,
        left: 18,
      },
      valign: 'center', // start, center, baseline
      baseColor: 'rgba(255,255,255,0.1)',
      // stripColor: { // should be numeric values that are mapped from the data
      //   0: 'rgba(255,255,255,0.25)', // '#4C566A',
      //   1: 'rgba(255,255,255,0.5)',
      //   2: 'rgba(255,255,255,0.75)',
      //   3: 'rgba(255,195,195,1)',
      // },
      // legendItems: { // should contain items from stripColor
      //   null: 'no data',
      //   stepLegend: {
      //     0: 'targeted',
      //     1: 'nationwide',
      //   },
      //   indexLegend: {
      //     0: 'no measures',
      //     1: 'recommend closing',
      //     2: 'require closing on some levels',
      //     3: 'require closing all levels',
      //   },
      // },
      // chartTitle: 'School closing measures',
      axis: true,
      // markDates: ['2019-12-31', '2020-03-25', '2020-07-07'], // yyyy-mm-dddd
    };

    defaultData = [];

    draw() {
      const allData = this.data();
      const props = this.props();
      const node = this.selection().node();

      // date formatters
      const locale = new D3Locale(props.locale);
      const dateFormat = locale.formatTime('%b %e');

      // get date range to be plotted
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
      // console.log(data);
      // get country details from AtlasClient from ISO-2
      // props.country = atlastClient.getCountry(props.countryISO2);

      const {
        width,
      } = node.getBoundingClientRect();

      const transition = d3.transition()
        .duration(750);

      const stripheight = props.legendItems ? (props.stripHeight - props.margin.top) : (props.height - props.margin.top - props.margin.bottom);

      // set scales

      const xScale = d3.scaleBand()
        .domain(dateSeries)
        .range([0, width - props.margin.left - props.margin.right])
        .padding(0);

      const yScale = d3.scaleLinear()
        .domain([0, props.dataParams.steps - 1])
        .range([stripheight / (props.dataParams.steps), stripheight]);

      const colorDomain = props.stripColor ? (Object.keys(props.stripColor)).map(d => +d) : d3.extent(data.map(d => d[props.dataParams.index]));

      const colorRange = props.stripColor ? colorDomain.map(d => props.stripColor[`${d}`]) : ['#333333', '#cccccc'];

      const colorScale = d3.scaleLinear()
        .domain(colorDomain)
        .range(colorRange)
        .interpolate(interpolateHcl);

      // main chart container
      const chartDiv = this.selection()
        .appendSelect('div') // see docs in ./utils/d3.js
        .attr('class', 'CountryLockdownIndicatorStrips')
        .style('width', `${width}px`)
      // .style('height', `${props.height}px`)
        .appendSelect('div')
        .style('padding-top', `${props.margin.top}px`)
        .style('padding-right', `${props.margin.right}px`)
        .style('padding-bottom', `${props.margin.bottom}px`)
        .style('padding-left', `${props.margin.left}px`);

      // make bars
      const bars = chartDiv.appendSelect('div.bars-container')
        .style('display', 'flex')
        .style('align-items', `${props.valign}`)
        .style('justify-content', 'center')
        .selectAll('.bar')
        .data(data, (d, i) => d[props.dataParams.date]); // for smooth data updation

      bars.enter().append('div')
        .attr('class', d => `bar ${d[props.dataParams.date]}`)
        .style('display', 'inline-block')
        .style('height', d => {
          if (isNaN(d[props.dataParams.stepValue])) {
            return yScale(0) + 'px';
          } else {
            return yScale(d[props.dataParams.stepValue]) + 'px';
          }
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
          if (isNaN(d[props.dataParams.stepValue])) {
            return yScale(0) + 'px';
          } else {
            return yScale(d[props.dataParams.stepValue]) + 'px';
          }
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
      // console.log(xScale(dateParse('2020-07-07')));
      if (props.axis) {
        const stepChange = [];
        if (props.dataParams.steps > 1) {
          for (let i = 1; i < props.dataParams.steps; i++) {
            const match = data.find((e) => (e[props.dataParams.stepValue]) === i);
            if (match) {
              stepChange.push(dateParse(match[props.dataParams.date]));
            }
          }
        }
        const markDates = props.markDates ?
          props.markDates.map(d => {
            if (!isNaN(xScale(dateParse(d)))) {
              return dateParse(d);
            }
          }).filter(d => !isNaN(d)) : [dateSeries[0], dateSeries.slice(-1)[0]].concat(stepChange);
        // console.log(markDates);
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
      // add chart title
      if (props.chartTitle) {
        chartDiv.appendSelect('div.chart-title')
          .attr('class', 'font-display chart-title')
          .html(`<h6>${props.chartTitle}</h6>`);
      }

      // chart legend
      if (props.legendItems) {
        // make legend
        const legendDiv = chartDiv.appendSelect('div.legend-container');
        if (props.legendItems.indexLegend) {
          var indexLegendItems = [];
          (Object.keys(props.legendItems.indexLegend)).forEach(d => {
            const item = {
              key: d,
              value: props.legendItems.indexLegend[d],
            };
            indexLegendItems.push(item);
          });
          if (props.legendItems.null) {
            indexLegendItems.unshift({
              key: 'null',
              value: props.legendItems.null,
            });
          }

          indexLegendItems = indexLegendItems.filter(d => (d.value !== 'null' && d.value !== null));
          // const legendWidth = (width - props.margin.right - props.margin.left) / indexLegendItems.length;

          const indexLegend = legendDiv.appendSelect('div.legend.indexLegend')
            .selectAll('.legend-item')
            .data(indexLegendItems, d => d.key); // for smooth data updation

          indexLegend.enter().append('div')
            .attr('class', d => `legend-item ${d.key}`)
            .style('display', 'flex')
            .style('margin', d => {
              if (d.key === 'null') { return '1rem 0'; }
            })
          // .style('width', `${legendWidth}px`)
            .merge(indexLegend)
            .html(d => {
              const color = (+d.key !== null) && !(isNaN(+d.key)) ? colorScale(+d.key) : props.baseColor;
              return `<span style="width:1.5rem;min-width:1rem; min-height:1rem; background: ${color}"></span> <p style="margin:0 0 0 0.5rem;">${d.value}</p>`;
            });

          indexLegend.exit()
            .transition(transition)
            .remove();
        }

        if (props.legendItems.stepLegend) {
          // step legend stuff
          var stepLegendItems = Object.keys(props.legendItems.stepLegend).map(d => {
            return {
              key: d,
              value: props.legendItems.stepLegend[d],
            };
          });
          // console.log(props.legendItems.stepLegend);
          stepLegendItems = stepLegendItems.filter(d => (d.value !== 'null' && d.value !== null));

          const stepLegend = legendDiv.appendSelect('div.legend.stepLegend')
            .style('align-items', `${props.valign}`)
            .selectAll('.legend-item')
            .data(stepLegendItems, d => d.key); // for smooth data updation

          stepLegend.enter().append('div')
            .attr('class', d => `legend-item ${d.key}`)
            .style('display', 'flex')
            .style('flex-flow', 'column-reverse')
            // .style('width', `${legendWidth}px`)
            .merge(stepLegend)
            .html((d, i) => {
              const stepSize = (stripheight) / stepLegendItems.length;
              return `<span style="width:100%; height:${((+d.key) + 1) * stepSize}px; background-color:${props.baseColor};"></span><p style="margin:0 0.5rem 0.5rem 0.5rem;">${d.value}</p>`;
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
