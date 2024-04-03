import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';




function Chart1(){
     const data=[
          {name:"Facebook", value:123},
          {name:"Twitter", value:234},
          {name:"Google", value:567},
          {name:"You Tube", value:890}
        ]
        return (
         <>
              <LineChart
                width={400}
                height={200}
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
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
          
         </>
        );
}

export default Chart1;