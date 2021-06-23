import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import { Link } from 'react-router-dom';
import bothapo from '../assets/images/bothapo.svg'

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
flex-wrap: nowrap;
width: 100%;
height: 400px;
justify-content: flex-start;
align-items: center;
`;
const Button = styled.button`
margin-right: 26em;
display: block;
  color: black;
  width: 150px;
  height: 45px;
  font-size: 16px;
  padding: 0.25em 1em;
  background-color: white;
  border-radius: 50px;
  border: 1px solid black;
  align-self: center;
  font-family: LoraVariable;
`;

export const Apo = styled.img`
display: block;
width: 100%;
  max-width:100%;
  height: 80%;
`;
const Title = styled.h1`
margin-top: 5px;
display: block;
width: 75%;
font-size: 4em;
color: black;
font-family: LoraVariable;
`;
const SubTitle = styled.p`
display: block;
margin-top: -2em;
width: 75%;
font-size: 1.3em;
color: #292929;
font-family: LoraVariable;

`;

function HeroHeader() {
    const { Col, Row } = useContext(AppContext)
    return (
        <Row>
            <Col
            display={`flex`}
            width={`50%`}
            ><Wrapper>
                <Title>Mediem is a place to write, read, and connect</Title>
                <SubTitle>It's easy and free to post your thinking on any topic and connect with millions of readers.</SubTitle>
                <StyledLink to={'/'}>
                    <Button>Start Writing</Button>
                </StyledLink>
            </Wrapper></Col>
            <Col
            display={`flex`}
            >
                <Wrapper>
                    <Apo src={bothapo} />
                </Wrapper>
            </Col>
        </Row>
    )
}

export default HeroHeader
