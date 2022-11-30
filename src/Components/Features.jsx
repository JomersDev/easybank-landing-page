import React from "react";

export default function Features() {
    return (
        <div className="features-container">
            <h1 className="features-title">Why choose Easybank?</h1>
            <p className="features-title-para">
                We leverage Open Banking to turn your bank account into your financial hub. 
                Control your finances like never before.
            </p>
            <div className="features-grid">
                <div className="features-card">
                    <img src="../src/assets/icon-online.svg" />
                    <h2>Online Banking</h2>
                    <p className="features-para">
                        Our modern web and mobile applications allow you to keep track of your 
                        finances wheerver you are in the world.
                    </p>
                </div>
                <div className="features-card">
                    <img src="../src/assets/icon-budgeting.svg" />
                    <h2>Simple Budgeting</h2>
                    <p className="features-para">
                        See exactly where your money goes each month. Receive notifications when
                        you're close to your hitting limits.
                    </p>
                </div>
                <div className="features-card">
                    <img src="../src/assets/icon-onboarding.svg" />
                    <h2>Fast Onboarding</h2>
                    <p className="features-para">
                        We don't do branches. Open your account in minutes online and start taking 
                        control of your finances right away.
                    </p>
                </div>
                <div className="features-card">
                    <img src="../src/assets/icon-api.svg" />
                    <h2>Open API</h2>
                    <p className="features-para">
                        Manage your savings, investments, pension, and much more from one account.
                        Tracking your money has never been easier.
                    </p>
                </div>
            </div>
        </div>
    )
}