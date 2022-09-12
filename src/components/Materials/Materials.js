import "./materials.css";

export const Materials = () => {
  return (
    <div>
      <div className="sm3m">
        <div className="stop-motion">
          <div className="smtitle">STOP-MOTION</div>

          <div className="gal"></div>
        </div>
        <div className="3d-motion">
          <div className="threedtitle">3D MOTION</div>
          <div className="gal2">
            {" "}
            <div className="giffy">
              <img src="/images/trey.gif" alt="home4" height={"150px"} />
            </div>
          </div>
        </div>
        <div className="clicky">click/tap to view with sound</div>
      </div>
    </div>
  );
};
