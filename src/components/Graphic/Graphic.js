import "./graphic.css";

export const Graphic = () => {
  return (
    <div className="gph">
      <div className="titlegph">
        <div className="tl">GRAPHIC DESIGN</div>
        <div className="iug">
          <img src="/images/SLIYUS.png" alt="home3" width={"665px"} />
        </div>
      </div>
      <div className="iug2">
        {" "}
        <img
          src="/images/ALBUMC-01.png"
          alt="home3"
          height={"700px"}
          width={"1200px"}
        />
        <div className="quote">
          art revolves around you <br /> you decide to care or not.
        </div>
      </div>
      <div className="expln2">explanations abt my passion for gd</div>
      <div className="da">
        <div className="tl2">DIGITAL ART</div>
        <div className="tl3">xyxyxyxxyxyyxyx</div>
      </div>
    </div>
  );
};
