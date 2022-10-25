import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../../pages/shared/Footer/Footer';
import Header from '../../../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col>
                <h2>side nav</h2></Col>
                <Col> <Outlet></Outlet></Col>
            </Row>
            
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;