import React, { createContext } from 'react';
import styled from 'styled-components';

export const AppContext = createContext({})

// MOVE STYLED COMPONENT GRID TO styled component GlobalStyle

export const AppProvider = ({ children }) => {

const Div = styled.div`
background-color: ${(props) => props.backgroundColor};
display: ${(props) => props.display};
color: ${(props) => props.color};
padding: ${(props) => props.padding};
flex: ${(props) => props.size};
width: ${(props) => props.width};
height: ${(props) => props.height};

`;

const Grid = styled.div`
margin: -9px;

`;
const Row = styled.div`
display: flex;
border-bottom: 1px solid black;
margin: 0px;
`;
const media = {
	xs: (styles) => `
	@media only screen and (max-width: 480px) {
		${styles}
	}
	`,
}

const Col = styled.div`
background-color: ${(props) => props.backgroundColor};
display: ${(props) => props.display};
color: ${(props) => props.color};
padding: ${(props) => props.padding};
flex: ${(props) => props.size};
width: ${(props) => props.width};
height: ${(props) => props.height};
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
${(props) => props.collapse && media[props.collapse] (`
display: none;
`)};
`;
// RESPONSIVE DESIGN PASSED AS PROPS USING STRING INTERPOLATION
// PASS other media queries add other properties to COL and media queries

    return (
        <AppContext.Provider
        value={{
            Grid,
            Row,
            Col,
            Div
        }}
        >{children}
        </AppContext.Provider>
    )

}