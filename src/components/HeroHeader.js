import React, {useContext, useState, useLayoutEffect} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import { Link } from 'react-router-dom';
import bothapo from '../assets/images/bothapo.svg'
import useDimensions from '../hooks/useDimensions'


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
`;

export const Apo = styled.img`
  width:500px;
  height: 300px;

`;
const Title = styled.h1`
font-size: clamp(36px, 4vw, 56px );
letter-spacing:-2px;
color: black;
font-family: LoraVariable;
`;
const SubTitle = styled.p`
font-size: clamp(16px, 3vw, 24px );
font-size: 1.2rem;
color: #292929;
font-family: LoraVariable;

`;


const HeroHeader = () => {
    const { Col } = useContext(AppContext)
    const { width, height, size } = useDimensions()


    useLayoutEffect(() => {

        return () =>  {}
        ;
    }, [])



    return (
        <>
            <Col
            marginTop={`2em`}
            position={`fixed`}
            maxHeight={`500px`}
            display={`flex`}
            flexDirection={`row`}
            flexWrap={`nowrap`}
            justifyContent={`space-around`}
            alignItems={`center`}
            alignContent={`space-between`}
            >
                <Col
                size={`1`}
                display={`flex`}
                flex-wrap={`nowrap`}
                flexDirection={`column`}
                justifyContent={`center`}
                alignItems={`flex-start`}>
                    <Title>Mediem is a place to write, read, and connect </Title>
                    <SubTitle>width:{width} height:{height}</SubTitle>
                    <SubTitle>breakpoint: {size}</SubTitle>
                    <Button onClick={() => console.log(size)}>Get Started</Button>
                </Col>
                <Col
                size={1}
                display={`flex`}
                flex-wrap={`nowrap`}
                flexDirection={`column`}
                justifyContent={`flex-end`}
                alignItems={`flex-end`}
                alignContent={`flex-start`}
                    marginTop={`7em`}
                    collapse={`xs`}>

                    <Apo src={bothapo} />   
                </Col>
             
            </Col> 
        </>
    )
}

export default HeroHeader
