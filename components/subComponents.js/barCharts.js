import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function barCharts() {
  return (
   <BarChart
  xAxis={[{ data: ['Jan', 'Feb','Mar','Apr','May'] }]}
  series={[{ data: [4, 3,1,1,1] }]}
  height={200}
/>
  );
}
