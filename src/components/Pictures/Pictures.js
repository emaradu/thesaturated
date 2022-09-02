import "./pictures.css";
export const Pictures = () => {
  return (
    <div className="pic">
      <div className="slatt">
        <div className="photos1">
          {" "}
          <div className="img1">
            <img
              src="/images/bildu.png"
              alt="home3"
              height={"250px"}
              width={"550px"}
            />
          </div>
          <div className="img2">
            <img
              src="/images/woodedited.png"
              alt="home3"
              height={"300px"}
              width={"550px"}
            />
          </div>
          <div className="img3">
            <img
              src="/images/tree2.png"
              alt="home3"
              height={"250px"}
              width={"550px"}
            />
          </div>
        </div>
        <div className="photos2">
          {" "}
          <div className="img4">
            <img
              src="/images/boat.png"
              alt="home3"
              height={"250px"}
              width={"550px"}
            />
          </div>
          <div className="img5">
            <img
              src="/images/slayus.png"
              alt="home3"
              height={"300px"}
              width={"550px"}
            />
          </div>
          <div className="img6">
            <img
              src="/images/emi.png"
              alt="home3"
              height={"250px"}
              width={"550px"}
            />
          </div>
        </div>
      </div>
      <div className="titlepic">
        PICTURES TAKEN BY ME <br /> WITH NIKON D5100
      </div>
      <div className="smalltext">18-105 MM, F3.5-5.6</div>
    </div>
  );
};
