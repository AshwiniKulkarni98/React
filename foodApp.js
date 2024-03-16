import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"


const Header = () => {
  return (
    <div className="heading">
      <div className= "logos">
        <img className="logo"
        src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"/>
      </div>
      <div className="menu">
        
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="main">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
