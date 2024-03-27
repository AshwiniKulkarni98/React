import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header"; // default import
import Body from "./Body";


const abc = (
  <div>
    <h1>hello world</h1>
    <h3>Hello</h3>
  </div>
);
const AppLayout = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
