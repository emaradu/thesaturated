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
      <div className="meaningtrack">
        Sounds. Humming, mumbling, art of the vibrating waves to start from a
        piece of nature elements and team-up
        <br /> with articulation of words. A way to express emotion, stomach
        butterflies, experience a state of antagonism and goosebumps
        <br /> that others could also feel, or not. A various list of genres,
        musical poetry for a various list of significations. This is where I
        found myself
        <br /> throughout my life. Music connects me to myself. It makes me
        float in a different state of mind where I meet my imagination's life
        reminders and futuristic universe.
        <br /> This place is where I am most comfortable to analyze my feelings,
        vision, ups and downs, hopes and dreams, fightings with the bad and
        healings with the good. <br /> This is where I feel safe with my
        thoughts and life-changing decisions. Music is there for me whenever I
        am at my lowest or highest, it is there for me to push me forward,
        <br /> to make me say "I only live once, I should spend the best of it",
        to make me move on, to help me live even the worst moments and let out
        all my sufferings, to remind me I am worth living, <br /> to remind me
        of happiness and to never give up on what person I have been working and
        aspiring to become. It is there for me whenever I need to take
        <br /> a break from the exhausting daily routine, it is there to bring
        my energy back up. With its help, I am finding my own voice to be
        shared, my talents and creativity to inspire and help others.{" "}
      </div>
    </div>
  );
};
