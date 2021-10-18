import react from "react";
import Logo from './../logo.svg';
import './Header.scss';
import Menu from "./Menu";


function Header(){
    return(
        <header>
			<img src={Logo} />
            <Menu />
        </header>
    );
}

export default Header;