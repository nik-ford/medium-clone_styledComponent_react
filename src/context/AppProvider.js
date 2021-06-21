import React, { createContext } from 'react'
import styled from 'styled-components'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {

const Grid = styled.div`
border: 1px solid purple;
`;
const Row = styled.div`
border: 1px solid violet;
display: flex;
`;
const media = {
	xs: (styles) => `
	@media only screen and (max-width: 580px) {
		${styles}
	}
	`,
}

const Col = styled.div`
border: 1px solid violet;
padding: 5px;
flex: ${(props) => props.size};
${(props) => props.collapse && media[props.collapse] (`
display: none;
`)};
`;
// RESPONSIVE DESIGN PASSED AS PROPS USING STRING INTERPOLATION
// PASS other media queries add other properties to xs

    return (
        <AppContext.Provider
        value={{
            Grid,
            Row,
            Col
        }}
        >{children}
        </AppContext.Provider>
    )

}