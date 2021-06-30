import React, {useContext, useState, useLayoutEffect} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import { Link } from 'react-router-dom';
import bothapo from '../assets/images/bothapo.svg'
import useDimensions from '../hooks/useDimensions'

// TODO try building 3 rows inside of the column give row direction and place elements into every row
const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Wrapper = styled.div`
display: flex;
flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
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
  z-index: 3;
`;

export const Apo = styled.img`
  width: 40%;
  height: 40%;
  display: block;

`;
const Title = styled.h1`
font-size: clamp(48px, 2em, 58px );
letter-spacing:-2px;
color: black;
font-family: LoraVariable;
`;
const SubTitle = styled.p`
font-size: clamp(16px, 3vw, 22px );
color: #292929;
font-family: LoraVariable;
margin-bottom: 50px;

`;


const HeroHeader = () => {
    const { Col, Row } = useContext(AppContext)
    const { width, height, size } = useDimensions()
    const breakpoint = 550
// TODO move ternary expression to context, name it mobile?? 

    useLayoutEffect(() => {

        return () =>  {}
        ;
    }, [])



    return (
        <>
            <Row
            display={`flex`}
            height={`100%`}
            width={width < breakpoint ? `100%` : `85%`}>
                <Col
                size={`0.8`}
                maxContent={`100%`}
                display={`flex`}
                flex-wrap={`nowrap`}
                flexDirection={`column`}
                justifyItems={`center`}
                alignItems={`flex-start`}
                margin={`70px 20px 70px 0px`}>
                    <Title>Mediem is a place to write, read, and connect </Title>
                    <SubTitle>It's easy and free to post your thinking on any topic and connect with millions of readers.</SubTitle>
                    <Button onClick={() => console.log(size)}>Get Started</Button>

                </Col>
                <Col
                size={1}
                display={`flex`}
                maxContent={`100%`}
                flex-wrap={`nowrap`}
                flexDirection={`column`}
                justifyContent={`flex-end`}
                alignItems={`flex-end`}
                alignContent={`flex-end`}
                    collapse={`xs`}>

                    <Apo src={bothapo} />   
                </Col>
            </Row>
        </>
    )
}

export default HeroHeader
