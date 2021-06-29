import React, {useContext} from 'react';
// import styled from 'styled-components';
// import useWindowDimensions from '../hooks/useWindowDimension'
import Navbar from '../components/Navbar'
import NavbarDummy from '../components/NavbarDummy'
import NavbarMobile from '../components/NavbarMobile'
import NavbarTablet from '../components/NavbarTablet'
import {AppContext} from '../context/AppProvider'
import HeroHeader from '../components/HeroHeader'
import useDimensions from '../hooks/useDimensions'


const Home = () => {
	const {Grid, Row, Div } = useContext(AppContext)
	const { width, height } = useDimensions()
	const breakpoint = 550

  return (
		<Grid>
			<Row
			borderBottom={`1px solid black`}
			width={`100%`}
			display={`flex`}
			justifyContent={`space-around`}
			height={`75px`}
			backgroundColor={`#C4E2FF`}
			position={`fixed`}
			> <NavbarDummy />
				{/* {
					width < breakpoint ? <NavbarTablet /> : <NavbarDummy />
				} */}
			</Row>
			<Row
			borderBottom={`1px solid black`}
			width={`100vw`}
			display={`flex`}
			height={`450px`}
			backgroundColor={`#C4E2FF`}
			alignItems={`center`}
			>
				<HeroHeader />
			</Row>
			<Row
			borderBottom={`1px solid black`}
			width={`100vw`}
			display={`flex`}
			height={`400px`}
			backgroundColor={`#C4E2FF`}
			justifyItems={`flex-start`}
			justifyContent={`flex-start`}
			alignContent={`flex-start`}
			alignItems={`flex-start`}
			>
				<Div>subsection</Div>
			</Row>
			<Row>
				<Div>Footer</Div>
			</Row>
			<Row>
				<Div>articles</Div>
			</Row>
			
    </Grid>
  );
}

export default Home;