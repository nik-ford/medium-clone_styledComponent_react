import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import logopngblacknew from '../assets/images/logopngblacknew.png'
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
margin-right: 1em;
  width: 100%;
  height:75;
  display: flex;
justify-content: flex-end;
align-items: center;
`;
export const Image = styled.img`
  width: 160px;
  max-width:100%;
  height:auto;
`;
export const Items = styled.div`
display: flex;
width: 100%;
height: 75px;
justify-content: flex-end;
align-items: center;
`;
export const Text = styled.p`
margin-right: 10px;
text-align: center;
color: #191919;
padding: 0.4em;
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
  align-self: center;
  margin-left: 0.8em;
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
    <>  <Row>
        <Col
        width={`25%`}
        height={`75px`}
        display={`flex`}
        >
            <Wrapper><Image src={logopngblacknew} /></Wrapper>
            
        </Col>
        <Col
        width={`60%`}
        height={`75px`}
        display={`flex`}
        collapse={'xs'}
        >
            <Items>
                <StyledLink><Text>Our story</Text></StyledLink>
                <StyledLink><Text>Membership</Text></StyledLink>
                <StyledLink><Text>Write</Text></StyledLink>
                <StyledLink><Text>Sign In</Text></StyledLink>

            </Items>
        </Col>
        <Col
        width={`20%`}
        height={`75px`}
        display={`flex`}
        >
            <StyledLink><Button>Get Started</Button></StyledLink>
        </Col>
        </Row>
    </>
    )
}

export default Navbar
