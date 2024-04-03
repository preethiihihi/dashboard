import React from 'react';

function Chart5(props){
return (
     <>
   <div style={{
  backgroundColor: "#e6e6fa", // Light purple color
  height: "200px",
  width: "200px",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
 justifyContent:"space-evenly",
  alignItems: "center"
}}>
 
    <h2 >{props.name}</h2>

  
    <h3 >{props.value}</h3>

</div>

     </>
);
}
export default Chart5