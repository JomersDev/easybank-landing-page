import React, { useRef} from "react";

export default function Nav() {
    const navRef = useRef();
    
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header className="nav-container">
            <img src="../src/assets/logo.svg" />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
                <a href="/#">Blog</a>
                <a href="/#">Careers</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <img src="../src/assets/icon-close.svg" />
                </button>
            </nav>
            <button>D</button>
            <button className="nav-btn" onClick={showNavBar}>
                <img src="../src/assets/icon-hamburger.svg" />
            </button>
        </header>
    )
}
