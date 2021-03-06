import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import logopngblacknew from '../assets/images/logopngblacknew.png'
import { Link } from 'react-router-dom';

// TODO FIX COL

export const Image = styled.img`
  width: 150px;
  height:25px;
`;

const Button = styled.button`
  color: gainsboro;
  width: 8em;
  height: 2.8em;
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
        alignContent={`center`}
        alignItems={`center`}
        height={`75px`}
        width={`100vw`}>
        <Col
        width={`100%`}
        size={1}
        display={`flex`}
        justifyContent={`space-between`}
        marginRight={`1em`}
        marginLeft={`1em`}
        >
            <Image src={logopngblacknew} />
            
            <StyledLink><Button>Get Started</Button></StyledLink>
        </Col>
        </Row>
        
    </>
    )
}

export default Navbar
