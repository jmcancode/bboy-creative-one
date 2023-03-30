import { Fragment, useRef } from "react";
import "./App.css";
// custom components
import backgroundVideo from "./assets/bboy.mp4";
import Footer from "./components/Footer.jsx";
// react-icons
import { AiOutlineDown } from "react-icons/ai";

function App() {
  const topRef = useRef(null);
  const brbRef = useRef(null);
  const executeScroll = () => brbRef.current.scrollIntoView();

  return (
    <Fragment>
      <section ref={topRef} className="App">
        <header className="App-header">
          <video loop autoPlay muted id="video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div
            style={{
              padding: "55px",
            }}
          >
            <h1 className="App-title">bboy creative</h1>
            <small className="App-description">Web / Mobile / Strategy</small>
          </div>
          <a onClick={executeScroll} href="#content">
            <AiOutlineDown />
          </a>
        </header>
      </section>
      <section ref={brbRef} id="#content">
        <div className="App-header">
          <div style={{ padding: 150 }}>
            <p
              style={{
                textTransform: "lowercase",
                fontWeight: "200",
              }}
            >
              At this time we are only accepting new clients by referral. If you
              are interested in working with us, please reach out to a friend
              who has worked with us in the past.
            </p>
          </div>
          <div>
            <p className="connect">Scroll to connect with us</p>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
