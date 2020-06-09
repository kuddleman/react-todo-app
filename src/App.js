import React from 'react';

import Header from './components/shared/Header/Header.jsx'
import TodoManager from './components/shared/TodoManager/TodoManager.jsx';
import Footer from './components/shared/Footer/Footer'

import { Container, Row, Col } from 'reactstrap'
import './App.css';


function App() {
  return (
    <Container>

      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col>
         <TodoManager />
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>   

    </Container>
  );
}

export default App;
