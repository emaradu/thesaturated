import { useState } from "react";
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
  return (
    <div
      className="main"
      onScroll={(e) => {
        console.log("aici", e.currentTarget.scrollTop);
        setScroll(e.currentTarget.scrollTop);
      }}
      style={{
        backgroundColor: scroll > 500 ? "#FFFFFF" : "#FFFFFF",
        //color: scroll > 500 ? "#FFFFFF" : "#000000",
      }}
    >
      {scroll < 500 && <Header />}
      <Home />
      <Portfolio />
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
      <About />
      <Credits />
      <Thankyou />
    </div>
  );
}

export default App;
