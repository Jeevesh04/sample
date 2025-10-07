import logo from "../assets/logo.png"
import "../style/header.css";
function header({ onLogoClick }){
    return(
        <>
            <header className="header">
                <img className="Logo" src={logo} alt="logo" onClick={onLogoClick}/>
            </header>
        </>
    );
}

export default header