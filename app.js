import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{},"Hello world from the React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headings);
console.log(root);

//this empty tag here is which gives attributes to our tags like heading , or somethings like that 
// we can pass id="header" so that the content acts as like heading

// how can we create the complex html things using react 

{/* <div id ="parent">
     <div id ="children">
        <h1>Hello react</h1>

     </div>
</div> */}

// The solution for this complex thing is
//  const headings = React.createElement("div",{id : "parent"},
//  React.createElement("div",{id : "child"},
//  [React.createElement("h1",{},"HELLO"), React.createElement("h2",{},"React")]
//  )
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headings);

// basially package .json file manages all the configurations which is done using Npms,
// like which dependency we have installed , what is the versin of that so on