import "./track.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

const songs = [
  require("../../audio/blueeeeee.wav"),
  require("../../audio/aSEDRT.wav"),
  require("../../audio/ehytfds.wav"),
  require("../../audio/m vb.wav"),
];

export const Track = () => {
  const [track, setTrack] = useState(0);
  return (
    <div className="trk">
      <div className="pla">playlist 01</div>
      <div className="sonmg">
        <AudioPlayer
          src={songs[track]}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={"true"}
          showJumpControls={"false"}
          onClickNext={() => {
            if (track + 1 === songs.length) {
              setTrack(0);
            } else {
              setTrack(track + 1);
            }
          }}
          onClickPrevious={() => {
            if (track === 0) {
              setTrack(songs.length - 1);
            } else {
              setTrack(track - 1);
            }
          }}
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
