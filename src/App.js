import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  CardColumns,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Sitebar from './components/Sitebar';
import Home from './home/Home';
import Auth from './auth/AuthClass';
import './App.css';
import AddProduct from './components/AddProduct';
import HCar1 from './home/HCar1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') });
    }
  }
  updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken });
    console.log(this.sessionToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: '' });
  };

  // protectedViews = () => {
  //   return this.state.sessionToken === localStorage.getItem('token') ? (
  //     <div>
  //       Happy MOre JOY
  //       <Home token={this.state.sessionToken} />
  //     </div>
  //   ) : (
  //     <Auth updateToken={this.updateToken} />
  //   );
  // };

  protectedViews1 = () => {
    return this.state.sessionToken === localStorage.getItem('token') ? (
      <div>Your logged in</div>
    ) : (
      <Auth updateToken={this.updateToken} />
    );
  };

  protectedViews2 = () => {
    return this.state.sessionToken === localStorage.getItem('token') ? (
      <div>
        Happy MOre JOY
        <Home token={this.state.sessionToken} />
      </div>
    ) : (
      <div>NOt logged in stuff here</div>
    );
  };

  protectedViewSide = () => {
    return this.state.sessionToken === localStorage.getItem('token') ? (
      <div>
        <Sitebar clickLogout={this.clearToken} />{' '}
        <AddProduct token={this.state.sessionToken} />
      </div>
    ) : (
      ' '
    );
  };

  render() {
    return (
      <>
        <Container>
          <div>
            {this.protectedViewSide()}
            {this.protectedViews1()}

            <Header />
            <Router>
              <div>
                <Row>
                  <div className="wrapper">
                    <Col md="12">
                      <HCar1 />
                      <img
                        src="https://i.etsystatic.com/14096576/r/il/4a1ce8/2040388216/il_794xN.2040388216_r1mh.jpg"
                        class="img-fluid"
                        alt="stuff"
                      ></img>
                    </Col>
                  </div>
                </Row>
                <Row>
                  <div className="wrapper">
                    <Col md="12">
                      <HCar1 />
                      <h2>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchang
                      </h2>
                    </Col>
                  </div>
                </Row>
                {/* <Row>
                  <div class="sidebar">
                    <Col md="3">{this.protectedViewSide()} </Col>
                  </div>
                </Row> */}
                <Row>{this.protectedViews2()}</Row>
                {/* <Row>
                  <div className="wrapper">
                    <Col md="9">{this.protectedViews()} </Col>
                  </div>
                </Row> */}
                <Row>
                  <div className="wrapper">
                    <Col md="12">
                      <HCar1 />
                      <img
                        src="https://i.etsystatic.com/14096576/r/il/4a1ce8/2040388216/il_794xN.2040388216_r1mh.jpg"
                        class="img-fluid"
                        alt="stuff"
                      ></img>
                    </Col>
                  </div>
                </Row>
                <Row>
                  <div className="footer">Copyright &copy; 2021</div>
                </Row>
              </div>
            </Router>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
