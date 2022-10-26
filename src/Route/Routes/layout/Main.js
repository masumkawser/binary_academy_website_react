import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../../../pages/Home/Home/Home';
import Footer from '../../../pages/shared/Footer/Footer';
import Header from '../../../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                
            
                 <Outlet></Outlet>
            </Row>
            
        </Container>
        
        <Footer></Footer>
        </div>
    );
};

export default Main;