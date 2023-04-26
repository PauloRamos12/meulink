import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <div className='menu'>
            <a className='social' href='https://www.youtube.com/@FlexproSistemas' target="_blank" rel="noopener noreferrer">
                <BsYoutube color='#c4302b' size={24} />
            </a>
            <a className='social' href='https://www.instagram.com/flexprosistemas/' target="_blank" rel="noopener noreferrer">
                <BsInstagram color='#FFF' size={24} />
            </a>
            <Link className='menu-item' to="/links">
                Meus Links Gerados
            </Link>
        </div>
    )
}

export default Menu;

