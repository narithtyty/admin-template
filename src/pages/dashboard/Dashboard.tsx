import Charts from '@/components/chart/Charts';
import BigNumber from 'bignumber.js';

const Dashboard = () => (
  <div>
    <p className="font-bold text-[24px]">Dashboard</p>
    <p>{'11100000'.formatToCurrency()}</p>
    <p>{new Date().formatDate('YYYY-MM-DD')}</p>
    <p>{new BigNumber(0.1).plus(0.2).toString()}</p>
    <p>{new BigNumber(333.4).dividedBy(0.1).toString()}</p>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[10px]">
      <Charts
        options={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
            },
          ],
        }}
      />
      <Charts
        options={{
          tooltip: {
            trigger: 'item',
          },
          legend: {
            top: '5%',
            left: 'center',
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
              },
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
              ],
            },
          ],
        }}
      />
      <Charts
        options={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'line',
            },
          ],
        }}
      />
      <Charts
        options={{
          title: {
            text: 'World Population',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
          },
          yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
          },
          series: [
            {
              name: '2011',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230],
            },
            {
              name: '2012',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807],
            },
          ],
        }}
      />
    </div>
    <br />
    <br />
  </div>
);

export default Dashboard;
