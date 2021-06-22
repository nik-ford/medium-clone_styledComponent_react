import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import logopngblack from '../assets/images/logopngblack.png'
import { Link } from 'react-router-dom';

export const Image = styled.img`
  margin-left: 60px;
  width: 190px;
  max-width:100%;
  display:block;
  height:auto;
  align-self: center;
  justify-self: flex-start;
`;
export const Items = styled.div`
display: flex;
width: 100%;
height: 75px;
justify-content: flex-end;
align-items: center;
margin-right: 60px;
`;
export const Text = styled.h3`
text-align: center;
padding: 10px;

`;

const Navbar = () => {
    const { Col, Row } = useContext(AppContext)
    


    return (
    <>  <Row>
        <Col
        width={`50%`}
        height={`75px`}
        display={`flex`}
        >
            <Image src={logopngblack} />
        </Col>
        <Col
        width={`50%`}
        height={`75px`}
        display={`flex`}
        >
            <Items>
                <Link style={{ textDecoration: 'none', color: '#1B1B1C' }}><Text>Link</Text></Link>
                <Link style={{ textDecoration: 'none', color: '#1B1B1C' }}><Text>Link</Text></Link>
                <Link style={{ textDecoration: 'none', color: '#1B1B1C' }}><Text>Link</Text></Link>
                <Link style={{ textDecoration: 'none', color: '#1B1B1C' }}><Text>Link</Text></Link>
            </Items>
        </Col>
        </Row>
    </>
    )
}

export default Navbar
