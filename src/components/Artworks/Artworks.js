import "./artworks.css";

export const Artworks = () => {
  return (
    <div className="page50">
      <div className="artl">ARTWORKS</div>
      <div className="mediawork">
        <div className="md1">
          <div className="d1">
            <img src="/images/take-the-bus.jpg" alt="home3" width={"450px"} />
          </div>
          <div className="d2">
            <img src="/images/bricks.png" alt="home3" width={"450px"} />
          </div>
          <div className="d3">
            <img src="/images/asdfg.png" alt="home3" width={"450px"} />
          </div>
        </div>
        <div className="md2">
          <div className="d4">
            <img src="/images/sdf.jpg" alt="home3" width={"450px"} />
          </div>
          <div className="d5">
            <img src="/images/hill.png" alt="home3" width={"450px"} />
          </div>
          <div className="d6">
            <img
              src="/images/saxd.png"
              alt="home3"
              width={"550px"}
              height={"330px"}
            />
          </div>
        </div>
        <div className="note">
          note: all designs are b&w in order to fit the website's template. for
          more designs that contain color check them here www.
        </div>
      </div>
    </div>
  );
};
