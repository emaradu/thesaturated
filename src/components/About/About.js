import "./about.css";

export const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef}>
      <div className="about-page">
        <div className="about-title">ABOUT ME</div>
        <div className="documentary"></div>
      </div>
    </div>
  );
};
