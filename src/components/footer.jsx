import React, { useState, useEffect, Fragment } from "react";
// react-icons
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
// web3
import { injected } from "./connectors";
// custom styles
import "./styles/Footer.css";
// react-bootstrap
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Legal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Terms of Service</h4>
        <p>
          just kidding, we don't keep any of your data on this site. We maintain
          industry standards for all security and data related matters.
        </p>
        <br />
        <h4>Privacy Policies</h4>
        <p>
          bboy-creative does not keep or share any data collected as we are a
          fully integrated web3 platform. You may request at anytime information
          from our data team at devs@bboycreative.com.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-dark" onClick={props.onHide}>
          I agree to all conditions stated above.
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <nav className="footer-container">
        <div>
          <ul
            className="footer-lists"
            style={{
              color: "#fff",
            }}
          >
            <li>
              <Button
                variant="outline-light"
                onClick={() => setModalShow(true)}
              >
                Legal
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </li>
          </ul>
        </div>
      </nav>
      <nav className="base-nav">
        <div>
          <ul
            className="footer-lists"
            style={{
              color: "#fff",
            }}
          >
            <li>
              <a href="mailto:jm@bboycreative.com">
                <AiFillMail size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bboycreative.eth/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <AiFillInstagram size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jmcancode/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <AiFillLinkedin size={25} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul
            className="footer-lists"
            style={{
              color: "#fff",
            }}
          >
            <li>
              <a href="mailto:jm@bboycreative.com">About Us</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bboycreative.eth/"
                rel="noreferrer noopener"
                target="_blank"
              >
                contact us
              </a>
            </li>
            <li>
              <a href="mailto:jm@bboycreative.com">pricing</a>
            </li>
            <li>
              {/* <a
                            href="https://twitter.com/bboycreative"
                            rel="noreferrer noopener"
                            target="_blank">
                            send ethereum
                        </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Footer;
