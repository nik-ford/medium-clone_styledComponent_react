import React, {useContext} from 'react';
// import styled from 'styled-components';
// import useWindowDimensions from '../hooks/useWindowDimension'
import Navbar from '../components/Navbar'
import {AppContext} from '../context/AppProvider'
import HeroHeader from '../components/HeroHeader'

const Home = () => {
	const {Grid, Row, Col, Div } = useContext(AppContext)

  return (
		<Grid>
			<Row
			width={`100vw`}
			display={`flex`}
			height={`75px`}
			backgroundColor={`#C4E2FF`}
			position={`fixed`}
			>
				<Navbar />
			</Row>
			<Row
			width={`100vw`}
			display={`flex`}
			height={`450px`}
			backgroundColor={`#C4E2FF`}
			alignItems={`center`}
			>
				<HeroHeader />
			</Row>
			<Row
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