import React, {useContext} from 'react';
import styled from 'styled-components';
// import useWindowDimensions from '../hooks/useWindowDimension'
import Navbar from '../components/Navbar'
import {AppContext} from '../context/AppProvider'
import HeroHeader from '../components/HeroHeader'

// TODO move styled component variables in a personal context
// I will leverage styled components to dinamically render mobile/desktop styled component
// I can use ternary expressions or props, I'll decide later, 
// now it's too late.......it's time to build a GIN TONIC, chill, and then go bed :)


export const Dimensions = styled.h1`
text-align: center;
`;

const Home = () => {
	const {Grid, Row, Col } = useContext(AppContext)

  return (
		<Grid>
			<Row>
				<Col
				 size={1}
				 height={`75px`}
				 justifyContent={`center`}
				 backgroundColor={`#C4E2FF`}>
					 <Navbar />
				</Col>
			</Row>
			<Row>
				<Col
				size={1}
				height={`400px`}
				justifyContent={`center`}
				backgroundColor={`#C4E2FF`}>
					<HeroHeader />
				</Col>
			</Row>
			<Row>
				<Col
				size={1}
				height={`350px`}>
					subsection
				</Col>
			</Row>
			<Row>
				<Col
				size={2}
				height={`350px`}>
					article section
				</Col>
				<Col
				 size={1}
				 collapse={'xs'}
				 height={`350px`}>
					footer
				</Col>
			</Row>
    </Grid>
  );
}

export default Home;