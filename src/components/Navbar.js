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
`;
export const List = styled.div`
display: flex;
`;
export const Item = styled.p`
width: 50px;
height: 30px;`;

const Navbar = () => {
    const { Col, Row } = useContext(AppContext)
    


    return (
    <>  <Row>
        <Col
        width={`50%`}
        height={`75px`}
        backgroundColor={`blue`}
        display={`flex`}>
            <Image src={logopngblack} />
        </Col>
        <Col
        width={`50%`}
        height={`75px`}
        display={`flex`}
        backgroundColor={`black`}>
            <Link><Item>link</Item></Link>
        </Col>
        </Row>
    </>
    )
}

export default Navbar
