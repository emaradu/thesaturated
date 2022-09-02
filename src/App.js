import { useState } from "react";
import "./App.css";
import { Anima } from "./components/Anima/Anima";
import { Artworks } from "./components/Artworks/Artworks";
import { Graphic } from "./components/Graphic/Graphic";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Media } from "./components/Media/Media";
import { Music } from "./components/Music/Music";
import { Pictures } from "./components/Pictures/Pictures";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Track } from "./components/Track/Track";

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
    </div>
  );
}

export default App;
