import React from 'react'
import './sideBar.css'
import Logo from '../../assets/logo.svg'

const SideBar = () => {
    const menu = [
        { name: 'home', icon: 'home' },
        { name: 'about', icon: 'user-following' },
        { name: 'article', icon: 'briefcase' },
        { name: 'resume', icon: 'graduation' },
        { name: 'portfolio', icon: 'layers' },
        { name: 'bogo', icon: 'note' },
        { name: 'contact', icon: 'bubble' }
    ]
    return (
        <aside className='aside'>
            <a href="#home" className='nav__logo'>
                <img src={Logo} alt="" />
            </a>

            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        {menu.map(({ name, icon }, key) =>
                            <li className='nav__item' id={key}>
                                <a href={"#" + name} className='nav__link'>
                                    <i className={'icon-' + icon}></i>
                                </a>
                            </li>)}
                    </ul>
                </div>
            </nav>

            <div className='nav__footer'>
                <span className='copyright'>&copy; 2022 - 2024.</span>
            </div>
        </aside>
    )
}

export default SideBar