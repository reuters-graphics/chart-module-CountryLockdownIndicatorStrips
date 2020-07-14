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

Data has to be in the following format, an array of objects. The dafault keys are ```date```, ```index```, ```stepValue``` and ```steps```. If the data is different, make sure to map the keys using the ```dataParams``` property.
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

```props``` will be used to customise the chart object. If a prop is not used while calling the chart, the default values mentioned will apply. 

Usage as folllows -

```javascript
props({
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
  baseColor: 'rgba(255,255,255,0.1)', // Simple gray fill. Used for null values as well.
  stripColor: { // should be numeric values that are mapped from the data
    0: '#4C566A',
    1: '#948072',
    2: '#f68e26',
    3: '#de2d26',
  },
  legendItems: { // should contain items from stripColor. Mention this prop if you wish to show a legend. Index and Step legends can be displayed independently.
    null: 'no data',
    stepLegend: { // for the strip width variation
      0: 'targeted',
      1: 'nationwide',
    },
    indexLegend: { // for the main colors of indices
      0: 'no measures',
      1: 'recommend closing',
      2: 'require closing on some levels',
      3: 'require closing all levels',
    },
  },
  chartTitle: 'School closing measures', // Blank by default
  axis: true, // To show the x-axis. Default true
  markDates: ['2019-12-31', '2020-03-25', '2020-07-07'], // yyyy-mm-dddd. Default marks axis extent dates
})
```

## Usage example

This chart component used along with line chart component from https://github.com/reuters-graphics/chart-module-weeklyaverage.git

##### Line chart
```javascript
this.myChart
    .selection(this.chartContainer.current)
    .data(casesData)
    .props({
      stroke: 'rgba(255, 255, 255, 0.15)', // colour of line
      strokeWidth: 3.14, // width of the line
      fill: '#eee', // colour of the bars
      height: 120, // chart height
      avg_days: 7, // avg line should be an how many day rolling avg
      left_y_axis: true,
      x_axis: false,
      bars: false,
      margin: {
        left: 18, right: 18, top: 10, bottom: 5,
      },
      date_range: ['2019-12-31', '2020-07-07'],
      padding: 0,
      labels: true, // Setting this to true will show a label
      variable_name: 'cases', 
    })
    .draw();
```
##### Strip chart
```javascript
this.chart
    .selection(this.chartContainer.current)
    .data(lockdownData)
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
        },
      },
      chartTitle: 'School closing measures',
      axis: true,
    })
    .draw();

```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
