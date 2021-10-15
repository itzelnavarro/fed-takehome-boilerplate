import react from "react";
import Logo from './../logo.svg';
import './Header.scss';

function Header(){
    return(
        <header>
			<img src={Logo} />
            <nav>
                <ul>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Process</a></li>
                    <li><a href="">Journal</a></li>
                    <li><a href="">Contact info</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;