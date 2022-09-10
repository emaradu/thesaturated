import "./home.css";
import Marquee from "react-fast-marquee";
export const Home = () => {
  return (
    <div className="home">
      <div className="page">
        <div className="definition">
          THIS WEBSITE IS USED FOR ARTISTIC PURPOSES.
        </div>
        <div className="text">
          Here you would come upon a list of things that mark the talents of a
          young student who dreams far ahead,
          <br /> highly determined to make a significant change for the future
          of art and build up a foundation with forms of creativity <br /> that
          would offer artistic enhancement and meaning to a .{" "}
        </div>
      </div>
      <Marquee className="animation" speed="70" gradient={false}>
        <div className="dil">
          CAUTION! YOU ARE ENCOUNTERING WITH EXQUISITE ARTISTRY, MAKE SURE YOU
          ADMIRE WITH EUPHORIA AND DILATED PUPILS.
        </div>
      </Marquee>
      <div className="alignment">
        <div className="noting1">
          All work is made by yems and will be copyrighted, licensed with the
          same rights as yems' own work. <br /> You may use images, and parts of
          images, but you may not reproduce their full content. Do not
          redistribute. Do not alter the original content.
        </div>
        <div className="notforuse">
          <img src="/images/notforuse.png" alt="home3" height={"30px"} />
        </div>
      </div>
    </div>
  );
};
