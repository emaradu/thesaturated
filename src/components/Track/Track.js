import "./track.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export const Track = () => {
  return (
    <div className="trk">
      <div className="pla">playlist 01</div>
      <div className="sonmg">
        <AudioPlayer
          src="https://soundcloud.com/emaradu/pieces"
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={"true"}
          showJumpControls={"false"}
          layout="horizontal-reverse"
          showDownloadProgress={"false"}
          defaultDuration="0"
          showFilledProgress={"false"}
          // other props here
        />
      </div>
      <div className="hul">
        <div className="trkimg">
          <img
            src="/images/ehehhe.png"
            alt="home3"
            height={"800px"}
            width={"400px"}
          />
          <div className="bytr">
            TRACK BY TRACK BEHIND THE WAVES <br /> A BETTER UNDERSTANDING
          </div>
        </div>
      </div>
    </div>
  );
};
