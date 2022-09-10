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
      <div className="socials">
        <a
          href="https://www.instagram.com/emaradu_/"
          rel="noreferrer"
          target="_blank"
          className="instalog"
        >
          <div className="insta">/emaradu_</div>
          <img
            className="log1"
            src="/images/instagram.png"
            alt="home3"
            height={"25px"}
            width={"35px"}
          />
        </a>
        <a
          href="https://www.facebook.com/emiliaraduu/"
          rel="noreferrer"
          target="_blank"
          className="faclog"
        >
          <div className="fac">/emiliaraduu</div>
          <img
            className="log2"
            src="/images/facebook.png"
            alt="home3"
            height={"30px"}
            width={"30px"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/emaradu/"
          rel="noreferrer"
          target="_blank"
          className="linlog"
        >
          <div className="lin">/emaradu</div>
          <img
            className="log3"
            src="/images/linkedin.png"
            alt="home3"
            height={"25px"}
            width={"30px"}
          />
        </a>
      </div>
    </div>
  );
};
