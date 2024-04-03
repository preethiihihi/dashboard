import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function Chart4(){
     const data=[
          {name:"Facebook", value:123},
          {name:"Twitter", value:234},
          {name:"Google", value:567},
          {name:"You Tube", value:890}
        ]
return(
     <>
     <PieChart width={500} height={200}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label 
          />
          <Tooltip />
        </PieChart>
     </>
)
}
export default Chart4