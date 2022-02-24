import React from 'react'
// custom styles
import "./styles/Footer.css"
function Footer() {

    return (

        <div className="footer-container">
            <div>
                <img
                    src={require('../assets/bboy-logo.png')}
                    alt="logo"
                    className="footer-logo"/>
            </div>
            <div>
                <ul className="footer-lists" style={{
                    color: "#fff"
                }}>
                    <li>
                      <a href="mailto:jm@bboycreative.com">
                      email
                      </a>
                      </li>
                    <li>
                      <a href="https://www.instagram.com/jonmichaelnarvaez/" rel="noreferrer noopener" target="_blank">
                      Instagram </a></li>
                    <li>
                      <a href="https://www.linkedin.com/in/jmcancode/" rel="noreferrer noopener" target="_blank">LinkedIn </a></li>
                    <li>
                      <a href="https://twitter.com/jm_cancode" rel="noreferrer noopener" target="_blank">
                      Twitter
                      </a>
                      </li>
                </ul>
            </div>
            <div>
                <ul className="footer-lists" style={{
                    color: "#fff"
                }}>
                    <li>brand partners</li>
                    <li>services</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

        </div>

    )
}

export default Footer