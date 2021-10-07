import React, {useState, useEffect} from 'react';
import './header.css';

function Header() {
    const [background, setBackground] = useState(false);
    const scrollEffect = () => {
        if(window.scrollY > 110) {
            setBackground(true)
        }else{
            setBackground(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollEffect);
        return () => {
            window.removeEventListener("scroll", scrollEffect);
        }
    }, [])
    return (
        <nav className={background ? "navigation active" : "navigation"}>
            <div className="logo">
                <img src="/images/star.png" alt="star logo" />
            </div>
            <ul className="list">
                <li>Home</li>
                <li>Menu</li>
                <li>Banquet Facility</li>
                <li>Gallery</li>
                <li>Catering</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Header
