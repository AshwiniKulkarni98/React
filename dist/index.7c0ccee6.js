// import React from "react";
const heading = React.createElement("h1", {}, "Hello world from the React");
// The solution for this complex thing is
const headings = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "HELLO"),
    React.createElement("h2", {}, "React")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headings); // basially package .json file manages all the configurations which is done using Npms,
 // like which dependency we have installed , what is the versin of that so on

//# sourceMappingURL=index.7c0ccee6.js.map
