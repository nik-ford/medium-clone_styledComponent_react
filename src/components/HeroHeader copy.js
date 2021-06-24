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
width: 50%;
height: 400px;
justify-content: space-between;
align-items: center;
`;
const Button = styled.button`
  color: black;
  width: 150px;
  height: 45px;
  font-size: 16px;
  padding: 0.25em 1em;
  background-color: white;
  border-radius: 50px;
  border: 1px solid black;
  font-family: LoraVariable;
  margin-bottom: 10px;
`;

export const Apo = styled.img`
  max-width:100%;
  height: 80%;
`;
const Title = styled.h1`
width: 70%;
font-size: 56px;
color: black;
font-family: LoraVariable;
`;
const SubTitle = styled.p`
width: 70%;
font-size:22px;
color: #292929;
font-family: LoraVariable;
margin-top: -30px;

`;

function HeroHeader() {
    const { Col, Row, Grid } = useContext(AppContext)
    return (
            <Row>
            <Col
            display={`flex`}
            flexDirection={`column`}
            size={1}
            width={`50%`}
            height={`400px`}
            maxWidth={`600px`}
            justifyContent={`flex-end`}
            alignItems={`flex-start`}
            marginLeft={`150px`}

            >
                     <Title>Medium is a place to write, read, and connect </Title>
                     <SubTitle>It's easy and free to post your thinking on a topic and connect with</SubTitle>
                     <Button>Get Started</Button>
            </Col>
            <Col 
            display={`flex`}
            flexDirection={`column`}
            flexWrap={`nowrap`}
            size={1}
            width={`50%`}
            height={`400px`}
            justifyContent={`flex-end`}
            alignItems={`flex-end`}
            collapse={`xs`}
            >
                     <Apo src={bothapo} />           
            </Col>

        </Row>
        
    )
}

export default HeroHeader
