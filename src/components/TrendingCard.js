import React, {useState, useEffect, useContext} from 'react'
import {AppContext} from '../context/AppProvider'
import styled from 'styled-components'

const ListContainer = styled.ol`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 350px;
list-style: none;
   counter-reset: item;
`;

const Element = styled.li`
   counter-increment: item;
   margin-bottom: 5px;
  &:before {
    margin-right: 10px;
   content: counter(item, decimal-leading-zero) "";
   color: #E6E6E6;
   width: 1.5em;
   font-size: 35px;
   font-family: Roboto;
   font-weight: bold;
   text-align: center;
   display: inline-block;
  }

   
`;

const TrendingCard = () => {
    const {Col, Row} = useContext(AppContext)

    return (
        <Col
        display={`flex`}>
        <ListContainer>
            <Element>
                prova elemento
            </Element>
            <Element>
                prova elemento
            </Element>
            <Element>
                prova elemento
            </Element>
            <Element>
                prova elemento
            </Element>
            <Element>
                prova elemento
            </Element>
            <Element>
                prova elemento
            </Element>
        </ListContainer>
        </Col>

    )
}

export default TrendingCard

