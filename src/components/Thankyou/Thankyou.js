import "./thankyou.css";
import Marquee from "react-fast-marquee";

export const Thankyou = () => {
  return (
    <div>
      <div className="about-page">
        <div className="thankyou-title">
          <Marquee className="animation" speed="120" gradient={false}>
            THANK YOU FOR YOUR TIME.{" "}
          </Marquee>{" "}
        </div>
      </div>
    </div>
  );
};
