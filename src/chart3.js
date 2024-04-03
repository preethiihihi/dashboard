import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,Rectangle, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart3(){
     const data=[
          {name:"Facebook", value:123},
          {name:"Twitter", value:234},
          {name:"Google", value:567},
          {name:"You Tube", value:890}
        ]
return (
     <>
       <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
     </>
);
}
export default Chart3;