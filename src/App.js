import logo from './logo.svg';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Chart1 from './chart1';
import Chart2 from './chart2';
import Chart3 from './chart3';
import Chart4 from './chart4';
import Chart5 from './chart5';

function App() {

  return (
   <>
<h1 style={{textAlign: "center"}}>Dashboard</h1>
<div style={{display:"grid", gridTemplateColumns:"repeat(3,400px)", gridGap:"100px"}}>
<div><Chart1/> </div>
<div><Chart2/> </div>
<div><Chart5 name="facebook" value="123" /></div>
<div><Chart3/> </div>
<div><Chart4/> </div>
<div><Chart5 name="youTube" value="678" /></div>

</div>
   </>
  );
}

export default App;
