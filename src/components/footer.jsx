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
                <ul style={{
                    color: "#fff"
                }}>
                    <li>email</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div>
                <ul style={{
                    color: "#fff"
                }}>
                    <li>brand partners</li>
                    <li>White Papers</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer