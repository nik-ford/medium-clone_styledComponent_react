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
width: ${(props) => props.width};
position: ${(props) => props.position};
display: ${(props) => props.display};
border-bottom: 1px solid black;
margin: 0px;
padding: ${(props) => props.padding};
width: ${(props) => props.width};
max-width: ${(props) => props.maxWidth};
min-width: ${(props) => props.minWidth};
height: ${(props) => props.height};
max-height: ${(props) => props.maxHeight};
min-height: ${(props) => props.minHeight};
grid-template-columns:${(props) => props.gridTemplateColumns};
grid-template-rows: ${(props) => props.gridTemplateRows};
grid-template-areas: ${(props) => props.gridTemplateAreas};
grid-area: ${(props) => props.gridArea};
background-color: ${(props) => props.backgroundColor};
align-items: ${(props) => props.alignItems};
align-content: ${(props) => props.alignContent};
justify-content: ${(props) => props.justifyContent};
justify-items: ${(props) => props.justifyItems};
justify-self: ${(props) => props.justifySelf};
align-self: ${(props) => props.alignSelf};
flex-shrink: ${(props) => props.flexShrink};
`;
const media = {
	xs: (styles) => `
	@media only screen and (max-width: 580px) {
		${styles}
	}
	`,
}

const Col = styled.div`
z-index:${(props) => props.zIndex};
grid-template-columns:${(props) => props.gridTemplateColumns};
position: ${(props) => props.position};
grid-template-rows: ${(props) => props.gridTemplateRows};
grid-template-areas: ${(props) => props.gridTemplateAreas};
grid-area: ${(props) => props.gridArea};
margin: ${(props) => props.margin};
margin-top: ${(props) => props.marginTop};
margin-left: ${(props) => props.marginLeft};
margin-right: ${(props) => props.marginRight};
margin-bottom: ${(props) => props.marginBottom};
flex-direction: ${(props) => props.flexDirection};
flex-wrap: ${(props) => props.flexWrap};
flex-shrink: ${(props) => props.flexShrink};
align-items: ${(props) => props.alignItems};
align-content: ${(props) => props.alignContent};
justify-content: ${(props) => props.justifyContent};
justify-items: ${(props) => props.justifyItems};
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