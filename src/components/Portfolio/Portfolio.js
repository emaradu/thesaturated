import "./portfolio.css";
import React from "react";

export const Portfolio = () => {
  return (
    <div className="prt">
      <div className="portfolius"> </div>
      <div className="righten">
        <div className="title">PORTFOLIO</div> <div className="rectangle"></div>
      </div>
      <div className="mainport">
        <div className="text3">
          providing a set
          <br />
          of skills <br /> I have gained <br />
          through my inspiration <br /> and creativity
        </div>
        <div className="bullets">
          <div className="photography">photography</div>
          <div className="musicprod">music production</div>
          <div className="graphicdes">graphic design</div>
          <div className="animatione">animation</div>
          <div className="video-editing">video-editing</div>
        </div>
      </div>
    </div>
  );
};
