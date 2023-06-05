import XYPlot from 'reactochart/XYPlot';
import XAxis from 'reactochart/XAxis';
import YAxis from 'reactochart/YAxis';
import LineChart from 'reactochart/LineChart';
import 'reactochart/styles.css';


export default function Stats() {
    const data = [
        {x: 0, y: 2},
        {x: 5, y: 22},
        {x: 10, y: 32},
        {x: 15, y: 36},
      ];
      return <XYPlot width={400} height={300}>
        <XAxis showGrid={false} title="Years" />
        <YAxis title="Followers"/>
        <LineChart
          data={data}
          x={d => d.x}
          y={d => d.y}
        />
      </XYPlot>
}