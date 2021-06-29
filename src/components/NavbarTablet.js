import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import logopngblacknew from '../assets/images/logopngblacknew.png'
import { Link } from 'react-router-dom';

export const Image = styled.img`
  width: 150px;
  height:25px;
`;
export const Text = styled.p`
color: #191919;
margin-right: 1em;
padding: 0.4em;
font-family: PlayfairDisplay;
font-size: 1em;

`;

const Button = styled.button`
  color: gainsboro;
  width: 8em;
  height: 2.5em;
  font-size: 0.85em;
  padding: 0.25em 1em;
  background-color: black;
  border-radius: 50px;
  border: 1px solid black;
  align-self: center;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Navbar = () => {
    const { Col, Row } = useContext(AppContext)
    


    return (
    <>
        <Row
        display={`flex`}
        flexDirection={`row`}
        height={`75px`}
        width={`100vw`}>
        <Col
        size={1}
        alignItems={`center`}
        justifyContent={`flex-start`}
        display={`flex`}
        marginRight={`1em`}
        marginLeft={`1em`}
        >
            
            <Image src={logopngblacknew} />

            <Col
        size={1}
        display={`flex`}
        justifyContent={`flex-end`}
        alignItems={`center`}
        marginRight={`1em`}
        marginLeft={`1em`}
        >
            <StyledLink to={'/'}><Text>Sign In</Text></StyledLink>
            <StyledLink to={'/'}><Button>Get Started</Button></StyledLink>
            </Col>
        </Col>
        </Row>
        
    </>
    )
}

export default Navbar
