import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import casesData from './casesData.json';
import React from 'react';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';

import WeeklyAverage from '@reuters-graphics/chart-module-weeklyaverage';

class ChartComponent extends React.Component {
    state = { width: '' };
    chartContainer = React.createRef();

    myChartContainer = React.createRef();

    // Instantiate and add our chart class to this component.
    chart = new Chart();
    myChart = new WeeklyAverage();

    // A resize function to redraw the chart.
    resize = debounce(() => {
      this.chart.draw();
      this.myChart.draw();
    }, 250);

    componentDidMount() {
      // Use our chart module.
      this.chart
        .selection(this.chartContainer.current)
      // .props({ fill: base.blue.hex })
      // .data()
        .draw();

      // Add a listener to resize chart with the window.
      window.addEventListener('resize', this.resize);

      // Gurman's chart

      this.myChart
        .selection(this.myChartContainer.current)
        .data(casesData)
        .props({
          stroke: '#4C566A', // colour of line
          strokeWidth: 3.618, // width of the line
          fill: '#eee', // colour of the bars
          height: 200, // chart height
          avg_days: 7, // avg line should be an how many day rolling avg

          bars: false, // True by default.
          // If you want just the line, set value to true

          padding: 0, // to set padding between the bars.
          // value should be between 0 to 1

          labels: false, // Setting this to true will show a label
          // to explain what the bars and line are

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
