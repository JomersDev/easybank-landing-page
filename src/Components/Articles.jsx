import React from "react";

export default function Articles() {
    return (
        <div className="articles-container">
            <h1>Latest Articles</h1>
            <div className="articles-item">
                <img className="articles-image" src="../src/assets/image-currency.jpg"/>
                <p className="articles-author">By Claire Robinson</p>
                <h4>Receive money in any currency with no fees</h4>
                <p className="articles-para">The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
            </div>
            <div className="articles-item">
                <img className="articles-image" src="../src/assets/image-restaurant.jpg"/>
                <p className="articles-author">By Wilson Hutton</p>
                <h4>Treat yourself without worrying about money</h4>
                <p className="articles-para">Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you ...</p>
            </div>
            <div className="articles-item">
                <img className="articles-image" src="../src/assets/image-plane.jpg"/>
                <p className="articles-author">By Wilson Hutton</p>
                <h4>Take your Easybank card wherever you go</h4>
                <p className="articles-para">We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</p>
            </div>
            <div className="articles-item">
                <img className="articles-image" src="../src/assets/image-confetti.jpg"/>
                <p className="articles-author">By Claire Robinson</p>
                <h4>Our invite-only Beta accounts are now live!</h4>
                <p className="articles-para">After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
            </div>
        </div>
    )
}