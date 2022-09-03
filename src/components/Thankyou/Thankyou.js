import "./thankyou.css";
import Marquee from "react-fast-marquee";

export const Thankyou = () => {
  return (
    <div>
      <div className="about-page">
        <Marquee className="thankyou-title" speed="120" gradient={false}>
          THANK YOU FOR YOUR TIME.{" "}
        </Marquee>{" "}
      </div>
    </div>
  );
};
