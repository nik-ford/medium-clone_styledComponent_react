import React, {useContext} from 'react';
import styled from 'styled-components';
// import useWindowDimensions from '../hooks/useWindowDimension'
import Navbar from '../components/Navbar'
import {AppContext} from '../context/AppProvider'
import HeroHeader from '../components/HeroHeader'
import useDimensions from '../hooks/useDimensions'
import TrendingCard from '../components/TrendingCard'
import trendingsvg from '../assets/images/trendingsvg.svg'

const Trending = styled.img`
width: 28px;
height: 28px;
margin-right: 15px;
`;


const Home = () => {
	const {Grid, Col, Row, Div } = useContext(AppContext)
	const { width, height } = useDimensions()
	const breakpoint = 550

  return (
		<Grid
		>
			<Row
			borderBottom={`1px solid black`}
			width={`100vw`}
			display={`flex`}
			justifyContent={`center`}
			height={`75px`}
			backgroundColor={`#C4E2FF`}
			position={`fixed`}
			> <Navbar />
				{/* {
					width < breakpoint ? <NavbarTablet /> : <NavbarDummy />
				} */}
			</Row>
			<Row
			borderBottom={`1px solid black`}
			flexDirection={`row`}
			width={`100vw`}
			display={`flex`}
			maxHeight={`600px`}
			backgroundColor={`#C4E2FF`}
			alignItems={`center`}
			justifyContent={`space-around`}
			>
				<HeroHeader />
			</Row>
			<Row
			borderBottom={`1px solid black`}
			width={`100vw`}
			display={`flex`}
			height={`80px`}
			justifyItems={`flex-start`}
			justifyContent={`flex-start`}
			alignContent={`flex-start`}
			alignItems={`flex-start`}
			>
				<Col
				width={`100%`}
				display={`flex`}
				flexDirection={`row`}
				alignItems={`center`}
				justifyContent={`flex-start`}
				padding={`0px 25px 0px 25px`}
				height={`80px`}
				backgroundColor={`pink`}><Trending src={trendingsvg}/>TRENDING ON MEDIEM</Col>
			</Row>
			<Row
			borderBottom={`1px solid black`}
			width={`100vw`}
			display={`flex`}
			height={`270px`}
			justifyItems={`flex-start`}
			justifyContent={`flex-start`}
			alignContent={`flex-start`}
			alignItems={`flex-start`}
			>
				<Col
				width={`100%`}
				display={`flex`}
				flexDirection={`column`}
				alignItems={`space-between`}
				justifyContent={`space-between`}
				height={`270px`}
				backgroundColor={`green`}><TrendingCard /></Col>
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