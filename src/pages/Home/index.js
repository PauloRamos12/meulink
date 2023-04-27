import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu';
import { useState } from 'react'
import LinkItem from '../../components/LinkItem';
import api from './/../../services//api'

function Home(){
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    async function handleShortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            })
            setData(response.data);
            setShowModal(true);
            setLink('');
        }catch{
            alert("Ops! Parece que algo deu errado")
            setLink('');
        }
    }


    return(
      <div className="container-home">

            <div className="logo">
                <img src="/logo.png" width="200" height="200" alt="Sujeito Link Logo" />
                <h1>SeuLink</h1>
                <span>Cole seu link abaixo para encurtar</span>
            </div>
                <div className="area-input">
                    <div>
                        <FiLink size={24} color='#FFF' />
                        <input 
                        placeholder='Cole seu link aqui'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <button onClick={handleShortLink}>Encurtar Link</button>
                </div>
                <Menu />

                { showModal && (
                <LinkItem
                    closeModal={ () => setShowModal(false) }
                    content={data} 
                />
            )}
      </div>
    )
  }
  
  export default Home;