import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import logopngblacknew from '../assets/images/logopngblacknew.png'
import { Link } from 'react-router-dom';
import useDimensions from '../hooks/useDimensions'

export const Image = styled.img`
  width: 160px;
  height:30px;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    text-align: center;
    color: #191919;
    padding: 0.5em;
    font-family: PlayfairDisplay;
    font-size: 1em;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
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



const  NavbarDummy = () => {
    const { Col, Row } = useContext(AppContext)
    const {width} = useDimensions()
    const breakpoint = 550

    return (
        <>
        <Row
            display={`flex`}
            width={ width < breakpoint ? `100%` : `85%` }
            >

          <Col
        size={1}
        height={`75px`}
        display={`flex`}
        justifyContent={`flex-start`}
        alignItems={`center`}
        > <Image src={logopngblacknew} />
            
            </Col> 
          <Col
        size={4.5}
        height={`75px`}
        display={`flex`}
        justifyContent={`flex-end`}
        alignItems={`center`}
        collapse={`xs`}
        >
            <StyledLink to={'/'}>Our story</StyledLink>
            <StyledLink to={'/'}>Membership</StyledLink>
            <StyledLink to={'/'}>Write</StyledLink>
            </Col> 
          <Col
        size={0.6}
        height={`75px`}
        display={`flex`}
        justifyContent={`center`}
        alignItems={`center`}
        collapse={`xs`}
        >
            <StyledLink to={'/'}>Sign In</StyledLink>
        </Col> 
          <Col
        size={0.5}
        height={`75px`}
        display={`flex`}
        justifyContent={width < breakpoint ? `flex-end` :  `center`}
        alignItems={`center`}
        ><StyledLink><Button>Get Started</Button></StyledLink></Col> 
        </Row> 
        </>
    )
}

export default NavbarDummy
