import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimension'
import Navbar from '../components/Navbar'

// TODO move styled component variables in a personal context
// I will leverage styled components to dinamically render mobile/desktop styled component
// I can use ternary expressions or props, I'll decide later, 
// now it's too late.......it's time to build a GIN TONIC, chill, and then go bed :)

export const Grid = styled.div`
border: 1px solid purple;
`;
export const Row = styled.div`
border: 1px solid violet;
display: flex;
`;
export const Col = styled.div`
border: 1px solid violet;
flex: ${(props) => props.size}; // TODO create other props (THEME??)
padding: 5px;
`;
export const Dimensions = styled.h1`
text-align: center;
`;

const Home = () => {
	const { height, width } = useWindowDimensions();


  return (
		<Grid>
			<Row>
				<Col size={1}>
					full size column copyPasteMe!
				</Col>
			</Row>
			<Row>
				<Col size={2}>
					article section size
				</Col>
				<Col size={1}>
					footer
				</Col>
			</Row>
    </Grid>
  );
}

export default Home;