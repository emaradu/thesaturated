import "./media.css";
export const Media = () => {
  return (
    <div className="pht">
      <div className="titles">
        <div className="phtitle">PHOTOGRAPHY</div>
        <div className="phtitle2">PHOTOGRAPHY</div>
        <div className="phtitle3">PHOTOGRAPHY</div>
      </div>
      <div className="hands">
        {" "}
        <img src="/images/hands.png" alt="home3" height={"500px"} />
      </div>
      <div className="line1">
        PARTS OF THE WORLD AND PEOPLE <br />
        PORTRAYED UNDER LENSES AND EDITING PROCESS
      </div>
      <div className="line2">explanations abt my passion for photography</div>
      <div className="circle">
        <a href="http://instagram.com" target="_blank" className="gallery">
          GALLERY
        </a>
        <img src="/images/circling.png" alt="home4" height={"150px"} />
      </div>
    </div>
  );
};
