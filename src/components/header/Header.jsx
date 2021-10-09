import React, {useState, useEffect} from 'react';
import './header.css';

function Header() {
    const [background, setBackground] = useState(false);
    const [bar, setBar] = useState(false);
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
        <nav className={background ? "navigation active" : "navigation" && bar ? "navigation open" : "navigation"}>
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
            <div className="box">
                <div className="shoping">
                    <i className="shop fas fa-shopping-basket"></i>
                    <p>0</p>
                </div>
                <div onClick={() => setBar(!bar)} className={bar ? "bars active" : "bars"}>
                    <span className="line"></span>
                </div>
            </div>
        </nav>
    )
}

export default Header
