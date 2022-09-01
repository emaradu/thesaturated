import "./header.css";
import Marquee from "react-easy-marquee";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">saturated</div>

        <div className="middle">
          <div> home </div>
          <div> portfolio </div>
          <div> about me </div>
        </div>
      </div>
    </div>
  );
};
