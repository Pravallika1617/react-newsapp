import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { IoCloseSharp, IoMenu } from 'react-icons/io5';

function Navbar({onSelectCategory}) {
    const [menuopen, setMenuopen] = useState(false);

    const menu = () => {
        setMenuopen(!menuopen);
    };

    return (
        <div className='navbar-container'>
            <h1>News<span>Web</span></h1>
            <nav className={`navbar ${menuopen ?  'open' : ''}`}>
                <div className='menu-icon' onClick={menu}>
                    {menuopen ? <IoCloseSharp /> : <IoMenu />}
                </div>
                
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/business'>Business</NavLink>
                <NavLink to='/entertainment'>Entertainment</NavLink>
                <NavLink to='/general'>General</NavLink>
                <NavLink to='/health'>Health</NavLink>
                <NavLink to='/science'>Science</NavLink>
                <NavLink to='/sports'>Sports</NavLink>
                <NavLink to='/technology'>Technology</NavLink>
            </nav>

        </div>
    )
}

export default Navbar

