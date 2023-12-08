import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';

function Charts({ options = {} }: { options?: object }) {
  return (
    <div className="h-full w-full bg-gray-100 rounded-xl">
      <ReactEChartsCore
        echarts={echarts}
        style={{ height: 500 }}
        option={options}
        notMerge={true}
        lazyUpdate={false}
      />
    </div>
  );
}

export default Charts;
