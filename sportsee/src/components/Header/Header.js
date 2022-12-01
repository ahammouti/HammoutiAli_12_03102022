import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

/**
 * @component Header
 * @returns Header component which contains the navlinks 
 */
const Header = () => {
    return (
        <header className='header'>
            <Link to={"/"} className="header__logo">
                <img src={logo} alt="" />
            </Link>
            <nav className="header__menu">
                <ul>
                    <li>
                        <Link to={"/"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Profil</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Réglage</Link>
                    </li>
                    <li>
                        <Link to={"#"}>Communauté</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header