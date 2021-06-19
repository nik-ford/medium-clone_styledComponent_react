import React, { createContext } from 'react'
// import styled from 'styled-components' TODO REMOVE

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider
        value={{
            
        }}
        >{children}
        </AppContext.Provider>
    )

}