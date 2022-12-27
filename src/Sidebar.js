import socialLinks from "./social.js";
import sectionLinks from "./links.js";
import carmen from "./carmen.svg";
import menu from "./menu.png";
import { useState } from "react";
import "./sass/App.css";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <img
        src={menu}
        alt="menu"
        className="logo menu"
        onClick={() => setShowSidebar(!showSidebar)}
      />

      <div
        className="sidebar"
        style={{
          left: showSidebar ? "0%" : "-100%",
        }}
      >
        <button className="close" onClick={() => setShowSidebar(false)}>
          X
        </button>
        <img src={carmen} alt="Carmen Lopez" className="logo" />
        <div>
          {sectionLinks.map((el) => {
            const { id, name, url } = el;
            return (
              <a
                key={id}
                href={url}
                rel="noopener noreferrer"
                className="links"
                onClick={(e) => e.preventDefault()} // Prevent from refresh, comment this when links are set properly
              >
                {name}
              </a>
            );
          })}
        </div>
        <div>
          {socialLinks.map((el) => {
            const { id, name, url, img } = el;
            return (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img className="social" key={id} src={img} alt={name} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
