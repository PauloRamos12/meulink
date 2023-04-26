import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu';

function Home(){
    return(
      <div className="container-home">

            <div className="logo">
                <img src="/logo.png" width="200" height="200" alt="Sujeito Link Logo" />
                <h1>SeuLink</h1>
                <span>Cole seu link para encurtar</span>
            </div>
                <div className="area-input">
                    <div>
                        <FiLink size={24} color='#FFF' />
                        <input 
                        placeholder='Cole seu link aqui'
                        />
                    </div>
                    <button>Encurtar Link</button>
                </div>
                <Menu />
      </div>
    )
  }
  
  export default Home;