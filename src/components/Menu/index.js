import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <div className='menu'>
            <a className='social' href='https://www.youtube.com/channel/UC-HOaON29jwoQHBYHFv5H-w'>
                <BsYoutube color='#FFF' size={24} />
            </a>
            <a className='social' href='https://www.instagram.com/flexprosistemas/'>
                <BsInstagram color='#FFF' size={24} />
            </a>
            <Link className='menu-item' to="/links">
                Meus Links
            </Link>
        </div>
    )
}

export default Menu;