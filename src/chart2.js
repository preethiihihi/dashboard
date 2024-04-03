import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

function Chart2(){
     const cardinal = curveCardinal.tension(0.2);
     const data=[
          {name:"Facebook", value:123},
          {name:"Twitter", value:234},
          {name:"Google", value:567},
          {name:"You Tube", value:890}
        ]
     return(
          <>
 <AreaChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      
          </>
     )
}
export default Chart2;