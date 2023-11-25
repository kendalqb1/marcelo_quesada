import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { contact, projects, skillsWithIMG } from '../../portafolio'
import './Navbar.css'

const Navbar = () => {

    const [{ themeName, toggleTheme}] = useContext(ThemeContext)
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className='center nav'>
            <ul
                style={{display: showNavList ? 'flex' :null}}
                className='nav__list'
            >
                {
                    projects.length ? (
                        <li className='nav__list-item'>
                            <a 
                                href='#projects' 
                                onClick={toggleNavList}
                                className='link link--nav'
                            >
                                Proyectos
                            </a>
                        </li>
                    ) 
                    : null
                }
                {
                    skillsWithIMG.length ? (
                        <li className='nav__list-item'>
                            <a 
                                href='#projects' 
                                onClick={toggleNavList}
                                className='link link--nav'
                            >
                                Habilidades
                            </a>
                        </li>
                    ) 
                    : null
                }
                {
                    contact.email ? (
                        <li className='nav__list-item'>
                            <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                            >
                            Contactame
                            </a>
                        </li>
                    )
                    : null
                }
            </ul>

            <button
                type='button'
                onClick={toggleTheme}
                className='btn btn--icon nav__theme'
                aria-label='toggle theme'
            >
                {themeName === 'dark' ? <WbSunnyIcon /> : <Brightness2Icon />}
            </button>

            <button
                type='button'
                onClick={toggleNavList}
                className='btn btn--icon nav__hamburger'
                aria-label='toggle navigation'
            >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>
    )
}


export default Navbar