import './error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='container-error'>
            <img src='notfound.jpeg' alt='Página não encontrada' />
            <h1>Página não encontrada!</h1>
            <Link to='/'>
                Voltar para a Home
            </Link>
        </div>
    )
}

export default Error;