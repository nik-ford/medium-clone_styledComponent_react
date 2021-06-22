import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import logopngblacknew from '../assets/images/logopngblacknew.png'
import { Link } from 'react-router-dom';

export const Image = styled.img`
  margin-left: 4.6em;
  width: 160px;
  max-width:100%;
  display:block;
  height:auto;
  align-self: center;
  justify-self: flex-start;
`;
export const Items = styled.div`
display: flex;
width: 100%;
height: 75px;
justify-content: flex-end;
align-items: center;
margin-right: 60px;
`;
export const Text = styled.p`
margin-right: 15px;
text-align: center;
color: #191919;
padding: 5px;
font-family: PlayfairDisplay;
font-size: 1em;

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
`;
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Navbar = () => {
    const { Col, Row, Div } = useContext(AppContext)
    


    return (
    <>  <Row>
        <Col
        width={`50%`}
        height={`75px`}
        display={`flex`}
        >
            <Image src={logopngblacknew} />
        </Col>
        <Col
        width={`50%`}
        height={`75px`}
        display={`flex`}
        >
            <Items>
                <StyledLink><Text>Our story</Text></StyledLink>
                <StyledLink><Text>Membership</Text></StyledLink>
                <StyledLink><Text>Write</Text></StyledLink>
                <StyledLink><Text>Sign In</Text></StyledLink>
                <StyledLink><Button>Get Started</Button></StyledLink>
            </Items>
        </Col>
        </Row>
    </>
    )
}

export default Navbar
