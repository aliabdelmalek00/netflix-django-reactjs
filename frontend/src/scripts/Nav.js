import React, { useState, useEffect} from 'react'
import logo from '../img/netflix.png'
import avatar from '../img/avatar.png'
import '../styles/Nav.css'
function Nav() {

    const [show, handleShow] = useState()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })

        return () => {
            window.addEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className="nav__logo"
                src={logo}
                alt="Netflix Logo" />
            
            <img className="nav__avatar"
                src={avatar}
                alt="Avatar Picture" />
        </div>
    )
}

export default Nav