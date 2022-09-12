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
        {" "}
        <a
          href="https://www.instagram.com/emaradu_/"
          rel="noreferrer"
          target="_blank"
          className="insta"
        >
          <img
            className="sw"
            src="/images/instagram.png"
            alt="home4"
            height={"25px"}
          />
          emaradu_
        </a>{" "}
        <a
          href="https://www.facebook.com/emiliaraduu/"
          rel="noreferrer"
          target="_blank"
          className="fb"
        >
          <img
            className="sw"
            src="/images/facebook.png"
            alt="home4"
            height={"25px"}
          />
          emiliaraduu
        </a>
        <a
          href="https://www.linkedin.com/in/emaradu/"
          rel="noreferrer"
          target="_blank"
          className="lkd"
        >
          <img
            className="sw"
            src="/images/linkedin.png"
            alt="home4"
            height={"25px"}
          />
          emaradu
        </a>
      </div>
    </div>
  );
};
