import "./header.css";
export const Header = ({ portRef, aboutRef }) => {
  return (
    <div>
      <div className="header">
        <div className="logo">saturated</div>

        <div className="middle">
          <div
            onClick={() => {
              portRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {" "}
            portfolio{" "}
          </div>
          <div
            onClick={() => {
              aboutRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {" "}
            about me{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
