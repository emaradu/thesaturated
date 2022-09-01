import "./animation.css";
import ReactPlayer from "react-player";

export const Animation = () => {
  return (
    <div className="whole">
      <div className="animationtitle">stop-motion animation</div>
      <div className="videos">
        <div className="video1">
          <ReactPlayer
            url="https://www.youtube.com/shorts/4MYItxI3hA0"
            playing
          />
        </div>
        <div className="video2">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=NqKuyB6VhxA"
            playing
          />
        </div>
        <div className="video3">
          <ReactPlayer
            url="https://www.youtube.com/shorts/cUc65wg9b8I"
            playing
          />
        </div>
      </div>
    </div>
  );
};
