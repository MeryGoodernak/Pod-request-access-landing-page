import logoAdrs from './images/logo.svg';
import './Logo.css';

function logo (){
    return(
        <header className="logo">
            <img src={logoAdrs} alt="Logo POD" />
        </header>
    )
}

export default logo;