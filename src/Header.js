import "./style.css";
import { LOGO_URL } from "./utils/constants"; //named import
const Header = () => {
  return (
    <div className="heading">
      <div className="logos">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </div>
    </div>
  );
};
//this is called default export
export default Header;
