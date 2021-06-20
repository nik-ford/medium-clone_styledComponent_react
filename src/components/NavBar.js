import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logopngblack.png'

const Navbar = () => {


    const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 70px;
    `;
    const Navbar = styled.div`
    width: 100%;
    height: 70px;
    justify-items: space-between;
    align-items: center;
    `;

    const Links = styled.ul`
    width: auto;
    text-decoration: none;

    `;
    const Link = styled.li`
    width: auto;
    text-decoration: none;
    font-size: 12px;
    
        `;
    const Image = styled.img`
    align-self: center;
    max-width:100%;
    height:auto;
    `;


    return (
        <Wrapper>
            <Navbar>
                <Image src={logo} />
                <Links>
                    <Link>link</Link>
                    <Link>link</Link>
                    <Link>link</Link>
                </Links>
            </Navbar>
        </Wrapper>
            
    )
}

export default Navbar
