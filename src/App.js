import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Media } from "./components/Media/Media";
import { Portfolio } from "./components/Portfolio/Portfolio";

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
    </div>
  );
}

export default App;
