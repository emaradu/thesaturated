import "./media.css";
export const Media = () => {
  return (
    <div className="pht">
      <div className="titles">
        <div className="phtitle">PHOTOGRAPHY</div>
        <div className="phtitle2">PHOTOGRAPHY</div>
        <div className="phtitle3">PHOTOGRAPHY</div>
      </div>
      <div className="hands">
        {" "}
        <img src="/images/hands.png" alt="home3" height={"500px"} />
      </div>
      <div className="line1">
        PARTS OF THE WORLD AND PEOPLE <br />
        PORTRAYED UNDER LENSES AND EDITING PROCESS
      </div>
      <div className="line2">
        Capturing moments whether it's a face, a building, or all things that
        are within the world's surface.
        <br /> We have created a tool to freeze a memory we could later
        remember, and where we could use our eyes instead of our mind alone.
        <br />
        Photography is a wonderful form of art to make this possible. Being an
        adventurous person, I could have never not capture those moments.
        Photography has helped me see things differently,
        <br /> observe and focus on the full-forgotten subjects in the act of
        movement. Bringing attention to objects, people, places that otherwise
        go unnoticed. We cannot let go of that. I have learnt to cherish every
        moment regardless it is bad or not, <br />
        in the past or not. We are humans and we feel. There is no shame in
        that. Taking photos has made me realize that everything has a meaning
        and we should not forget about that. We grow <br />
        through it and we move on. Through pictures, we connect our emotions
        visually and we have the freedom to perceive what we want from it, what
        it means and what it makes us believe. I always capture and offer
        attention from the biggest to
        <br /> the littlest thing in front of me, even in the absence of a
        camera. 'This looks unbelievable. It is right there, right in front of
        me'. Photography has taught me to look at the world with a different
        mindset: it is there and it exists.
      </div>
      <div className="wrapper">
        <div className="circle">
          <a
            href="http://instagram.com/yetsounaware"
            rel="noreferrer"
            target="_blank"
            className="gallery"
          >
            GALLERY
          </a>

          <img
            className="circleimg"
            src="/images/circling.png"
            alt="home4"
            height={"150px"}
          />
        </div>
        <div className="infos">
          click/tap to open a new page to see more pictures
        </div>
      </div>
    </div>
  );
};
