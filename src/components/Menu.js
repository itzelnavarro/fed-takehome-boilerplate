import React, {useState} from "react";
import styled from "styled-components";

const Burger = styled.div`
    width: 50px;
    float: right;
    cursor: pointer;
    display: none;

    @media (max-width:768px){
        display: block;

        div{
            width: 50px;
            height: 5px;
            background: #000;
            transition: all 0.5s;
            transform-origin: 4px;
    
            &:nth-child(1){
                transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
            }
            &:nth-child(2){
                margin: 10px 0;
                opacity: ${({open}) => open ? '0' : '1'};
            }
            &:nth-child(3){
                transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        }
    }
`;

const Nav = styled.nav`
    height: ${({open}) => open ? '100px' : '0'};
`;

const Menu = () => {
    const [open, setOpen] = useState(false)
    
    return(
        <>
            <Burger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </Burger>
            <Nav open={open}>
                <ul>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Process</a></li>
                    <li><a href="">Journal</a></li>
                    <li><a href="">Contact info</a></li>
                </ul>
            </Nav>
        </>
    )
}

export default Menu;