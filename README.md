![](./badge.svg)

# CountryLockdownIndicatorStrips

### Install

```
$ yarn add @reuters-graphics/chart-module-countrylockdownindicatorstrips
```

### Use

```javascript
import CountryLockdownIndicatorStrips from '@reuters-graphics/chart-module-countrylockdownindicatorstrips';

const myChart = new CountryLockdownIndicatorStrips();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  .data([1, 2, 3])
  .props({ stroke: 'orange' })
  .draw();

// You can call any method again to update the chart.
myChart
  .data([3, 4, 5])
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$CountryLockdownindicatorstrips-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$CountryLockdownindicatorstrips-container: '#chart';

@import '~@reuters-graphics/chart-module-countrylockdownindicatorstrips/scss/main';
```
## Customising the chart

Data has to be in the following format, an array of objects.
```
[
  {
      "date": "2020-01-01",
      "c1": 0,
      "flag": ""
  },
  {
      "date": "2020-01-02",
      "c1": 0,
      "flag": ""
  },
]
```
where, date is in ```YYYY-MM-DD```. The other parameters are the data point for strip color and for strip height variation.

```props`` will be used to customise the chart object. If a prop is not used while calling the chart, the default values mentioned will apply. 

Usage as folllows -

```javascript
class CountryLockdownIndicatorStrips extends ChartComponent {
  defaultProps = {
    locale: 'en', // Default language is English. See docs https://github.com/reuters-graphics/d3-locale 
    dateSeries: ['2019-12-31', '2020-07-07'], // yyyy-mm-dd format
    dataParams: { // pass the key accessors from your data to the chart
      date: 'date',
      index: 'c1',
      stepValue: 'flag',
      steps: 2, // stepValue = 0, 1...
    },
    height: 150, // Default height of the chartblock
    stripHeight: 50, // Default height of the strips
    margin: { // Default values
      top: 10,
      right: 18,
      bottom: 10,
      left: 18,
    },
    valign: 'center', // start, center or baseline. Default center.
    baseColor: 'rgba(255,255,255,0.1)',
    stripColor: { // should be numeric values that are mapped from the data
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
      },
    },
    chartTitle: 'School closing measures',
    axis: true, // To show the x-axis. Default true
    markDates: ['2019-12-31', '2020-03-25', '2020-07-07'], // yyyy-mm-dddd. Default marks axis extent dates
  };
}
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
