import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    //The onscroll event occurs when an element's scrollbar is being scrolled.
    //Esta funcion es para que la navbar sea negra cuando el pageYOffset = 0 y transparente
    //a medida que scrolleo para abajo
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    }
    console.log(setIsScrolled)
    return (
    <div className={ isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <Link to='/' className="link">
                    <span>Inicio</span>
                </Link>
                <Link to='/series' className="link">
                    <span>Series</span>
                </Link>
                <Link to='/movies' className="link">
                    <span>Películas</span>
                </Link>
                <span>Novedades populares</span>
                <span>Mi lista</span>
                <span>Explora por idiomas</span>
            </div>
            <div className="right">
                <SearchIcon className='icon'/>
                <span>Niños</span>
                <Notifications className='icon'/>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />
                <div className="profile">
                    <ArrowDropDownIcon className='icon'/>
                    <div className="options">
                        <span>Administrar perfiles</span>
                        <span>Transferir perfil</span>
                        <span>Cuenta</span>
                        <span>Centro de ayuda</span>
                        <span>Cerrar sesión en Netflix</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
)};

export default Navbar;