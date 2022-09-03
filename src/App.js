import { useRef, useState } from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Anima } from "./components/Anima/Anima";
import { Artworks } from "./components/Artworks/Artworks";
import { Credits } from "./components/Credits/Credits";
import { Graphic } from "./components/Graphic/Graphic";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Materials } from "./components/Materials/Materials";
import { Media } from "./components/Media/Media";
import { Music } from "./components/Music/Music";
import { Pictures } from "./components/Pictures/Pictures";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Thankyou } from "./components/Thankyou/Thankyou";
import { Track } from "./components/Track/Track";
import { Video } from "./components/Video/Video";
import { Videomedia } from "./components/Videomedia/Videomedia";

function App() {
  const [scroll, setScroll] = useState(0);
  const aboutRef = useRef();
  const portRef = useRef();
  return (
    <div
      className="main"
      onScroll={(e) => {
        setScroll(e.currentTarget.scrollTop);
      }}
      style={{
        backgroundColor: scroll > 500 ? "#FFFFFF" : "#FFFFFF",
        //color: scroll > 500 ? "#FFFFFF" : "#000000",
      }}
    >
      {scroll < 500 && <Header aboutRef={aboutRef} portRef={portRef} />}
      <Home />
      <Portfolio portRef={portRef} />
      <Media />
      <Pictures />
      <Music />
      <Track />
      <Graphic />
      <Artworks />
      <Anima />
      <Materials />
      <Video />
      <Videomedia />
      <About aboutRef={aboutRef} />
      <Credits />
      <Thankyou />
    </div>
  );
}

export default App;
