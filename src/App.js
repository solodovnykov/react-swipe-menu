import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  // Close menu by scroll
  const listenToScroll = (event) => {
    const winScroll = event.target.scrollTop;
    if (winScroll === 0) {
      setShowMenu(false);
    }
    console.log(event.target.scrollTop);
  };

  // Show menu hander
  const showMenuHandler = () => {
    setShowMenu(true);
  };

  // Scroll event listener
  useEffect(() => {
    const scrollWrapper = document.getElementById("scrollWrapper");
    scrollWrapper.addEventListener("scroll", (event) => {
      listenToScroll(event);
    });
    return () => scrollWrapper.removeEventListener("scroll", listenToScroll);
  }, []);

  // Show menu
  useEffect(() => {
    executeScroll();
  }, [showMenu]);

  return (
    <div className="App">
      <div className="container">
        <div className="view">
          <div
            style={{
              display: showMenu ? "flex" : "none",
            }}
            id="scrollWrapper"
            className="scroll-wrapper">
            <div className="scroll-item hidden"></div>
            <div ref={myRef} className="scroll-item active">
              <div className="toggle">toggle</div>
              <div className="btn-wrapper">
                <button>button 1</button>
                <button>button 1</button>
                <button>button 1</button>
                <button>button 1</button>
              </div>
            </div>
          </div>
          <div className="text-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            nostrum reiciendis facere corporis in minima, cumque distinctio
            dolorum deserunt dolor consectetur ut. Fuga nostrum vel libero illo
            dolor omnis blanditiis?
          </div>
          <button onClick={() => showMenuHandler()}>Show</button>
        </div>
      </div>
    </div>
  );
}

export default App;
