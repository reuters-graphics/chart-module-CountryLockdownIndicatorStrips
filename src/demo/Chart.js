import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import WeeklyAverage from '@reuters-graphics/chart-module-weeklyaverage';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import casesData from './casesData.json';
import debounce from 'lodash/debounce';
import defaultData from './defaultData.json';

class ChartComponent extends React.Component {
    state = { width: '' };
    chartContainer = React.createRef();

    myChartContainer = React.createRef();

    // Instantiate and add our chart class to this component.
    chart = new Chart();
    myChart = new WeeklyAverage();

    // A resize function to redraw the chart.
    resize = debounce(() => {
      this.chart
        .props({
          legendItems: { // should contain items from stripColor
            // null: null,
            // stepLegend: {
            //   0: null,
            //   1: null,
            // },
            indexLegend: {
              0: 'no NONO',
              1: 'recommend closing',
              2: 'require closing on some levels',
              3: 'require closing all levels',
              4: null,
            },
          },
        })
        .draw();
      this.myChart.draw();
    }, 250);

    componentDidMount() {
      // Use our chart module.
      this.chart
        .selection(this.chartContainer.current)
        .data(defaultData)
        .props({
          locale: 'en',
          dateSeries: ['2019-12-31', '2020-07-07'],
          dataParams: {
            date: 'date',
            index: 'c1',
            stepValue: 'flag',
            steps: 2, // stepValue = 0, 1...
          },
          margin: {
            top: 10,
            right: 18,
            bottom: 10,
            left: 18,
          },
          baseColor: 'rgba(255,255,255,0.1)',
          stripColor: {
            0: '#4C566A',
            1: '#948072',
            2: '#f68e26',
            3: '#de2d26',
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
              4: 'something',
            },
          },
          chartTitle: 'School closing measures',
          axis: true,
        })
        .draw();

      // Add a listener to resize chart with the window.
      window.addEventListener('resize', this.resize);

      // Gurman's chart

      this.myChart
        .selection(this.myChartContainer.current)
        .data(casesData)
        .props({
          stroke: 'rgba(255, 255, 255, 0.15)', // colour of line
          strokeWidth: 3.14, // width of the line
          fill: '#eee', // colour of the bars
          height: 120, // chart height
          avg_days: 7, // avg line should be an how many day rolling avg
          left_y_axis: true,
          x_axis: false,
          bars: false, // True by default.
          // If you want just the line, set value to true
          margin: {
            left: 18, right: 18, top: 10, bottom: 5,
          },
          date_range: ['2019-12-31', '2020-07-07'],
          padding: 0, // to set padding between the bars.
          // value should be between 0 to 1

          labels: true, // Setting this to true will show a label
          // to explain what the bars and line are
          // text: {
          //   subhed: 'Weekly average infections reported',
          // },
          variable_name: 'cases', // What is this a chart of? Infections? Deaths? Tests?
        })
        .draw();
    }

    componentWillUnmount() {
      // Remove listener if the component is removed, too.
      window.removeEventListener('resize', this.resize);
    }

    componentDidUpdate() {
      // Update the chart with the component.
      // Can change data or props here, whatever...
      this.chart.draw();
      this.myChart.draw();
    }

    render() {
      const { width } = this.state;
      return (
        <ChartContainer
          width={width}
          setWidth={
            (width) => this.setState({ width })
          }
        > {/* This is our chart container 👇 */}
          <div id='myChart' ref={this.myChartContainer} />
          <div id='chart' ref={this.chartContainer} />
        </ChartContainer>
      );
    }
}

export default ChartComponent;
