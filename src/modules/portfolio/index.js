import React from 'react';
import { Layout } from 'antd';
// import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis';

const { Content } = Layout;
const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
];

function Portfolio() {
    return (
    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineMarkSeries
        className="linemark-series-example"
        style={{
          strokeWidth: '3px'
        }}
        lineStyle={{stroke: 'red'}}
        markStyle={{stroke: 'blue'}}
        data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
      />
      <LineMarkSeries
        className="linemark-series-example-2"
        curve={'curveMonotoneX'}
        data={[{x: 1, y: 11}, {x: 1.5, y: 29}, {x: 3, y: 7}]}
      />
    </XYPlot>
    )
}

export {Portfolio};