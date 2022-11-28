import React from "react";

export default function Footer() {
    return (
        <div className="footer-container">
            <img className="footer-logo" src="../src/assets/logo-white.svg" />
            <div className="footer-socials">
                <img className="social-image" src="../src/assets/icon-facebook.svg" />
                <img className="social-image" src="../src/assets/icon-youtube.svg" />
                <img className="social-image" src="../src/assets/icon-twitter.svg" />
                <img className="social-image" src="../src/assets/icon-pinterest.svg" />
                <img className="social-image" src="../src/assets/icon-instagram.svg" />
            </div>
            <p className="footer-menu">About Us</p>
            <p className="footer-menu">Contact</p>
            <p className="footer-menu">Blog</p>
            <p className="footer-menu">Careers</p>
            <p className="footer-menu">Support</p>
            <p className="footer-menu">Privacy Policy</p>
            <button className="btn footer-btn">Request Invite</button>
            <p className="footer-copyright">© Easybank. All Rights Reserved</p>
        </div>
    )

}