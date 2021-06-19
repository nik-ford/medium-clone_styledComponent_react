import React from 'react'
import { AppProvider } from '../context/AppProvider'
import HomeStack from './HomeStack'

 const index = () => {
    return (
        <AppProvider>
            <HomeStack />
        </AppProvider>
    )
}
export default index
