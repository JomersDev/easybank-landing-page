import React from "react";

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-image-bg">
                <img className="hero-image" src="../src/assets/image-mockups.png" />
            </div>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more</p>
            <button className="btn">Request Invite</button>
        </div>
    )
}