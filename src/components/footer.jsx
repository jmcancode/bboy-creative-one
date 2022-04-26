import React, {useState} from 'react'
// custom styles
import "./styles/Footer.css"
// react-bootstrap
import {Modal, Button} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Legal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Terms of Service</h4>
                <p>
                    just kidding, we don't keep any of your data on this site. We maintain industry
                    standards for all security and data related matters.
                </p>
                <br/>
                <h4>Privacy Policies</h4>
                <p>
                   bboy-creative does not keep or share any data collected as we are a fully integrated web3 platform. You may request at anytime information from our data team at devs@bboycreative.com.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-dark"onClick={props.onHide}>I agree to all conditions stated above.</Button>
            </Modal.Footer>
        </Modal>
    );
}

async function getAccount() {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
    });
    const account = accounts[0];
    return account;
}

function Footer() {
    const [modalShow,
        setModalShow] = useState(false);

    const connectButtonOnClick = () => {
        if(typeof window !== "undefinded") {
           getAccount().then((response) => {
               console.log(response);
           })
        }
    }    



    return (

        <div className="footer-container">
            <div>
                <img
                    src={require('../assets/bboy-logo.png')}
                    alt="logo"
                    className="footer-logo"/>
            </div>
            <div>
                <ul
                    className="footer-lists"
                    style={{
                    color: "#fff"
                }}>
                    <li>
                        <a href="mailto:jm@bboycreative.com">
                            email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/bboycreative.eth/"
                            rel="noreferrer noopener"
                            target="_blank">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jmcancode/"
                            rel="noreferrer noopener"
                            target="_blank">LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/bboycreative"
                            rel="noreferrer noopener"
                            target="_blank">
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul
                    className="footer-lists"
                    style={{
                    color: "#fff"
                }}>
                    <li>
                        <Button variant="outline-light" onClick={() => setModalShow(true)}>
                            Legal
                        </Button>

                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/></li>
                    <li onClick={connectButtonOnClick}>Connect Wallet</li>
                </ul>
            </div>

        </div>

    )
}

export default Footer