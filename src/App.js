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
  CardGroup,
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
      ''
    ) : (
      <Auth updateToken={this.updateToken} />
    );
  };

  protectedViews2 = () => {
    return this.state.sessionToken === localStorage.getItem('token') ? (
      <div>
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
                        src="https://res.cloudinary.com/dounpk3nt/image/upload/v1637066568/i8thatImages/n3j2xpriniq6yjmlkgyt.png"
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
                      <div className="sectBcopy">
                        <h2>BigO Woodblocks</h2>
                        <p className="sectBcopy">
                          Our fascination with the letterpress has lead us to
                          experiment with using newer tech (lasers and computer
                          added routers) to create wood lettering for printing.
                          It has been a fun experiment brought many request if
                          these could be purchased for decoration. Just put in
                          your requirements and we will whittle you a piece of
                          joy.
                        </p>
                      </div>
                    </Col>
                  </div>
                </Row>
                {/* <Row>
                  <div class="sidebar">
                    <Col md="3">{this.protectedViewSide()} </Col>
                  </div>
                </Row> */}
                <Row>
                  <div className="wrapper">
                    <Col>
                      <h1 id="currentOffer">Current Offerings</h1>
                      <CardGroup>{this.protectedViews2()}</CardGroup>
                    </Col>
                  </div>
                </Row>
                {/* <Row>
                  <div className="wrapper">
                    <Col md="9">{this.protectedViews()} </Col>
                  </div>
                </Row> */}
                <Row>
                  <div className="wrapper">
                    <Col md="12">
                      <HCar1 />
                      <h1 id="aboutus">About Us</h1>
                      <img
                        src="https://res.cloudinary.com/dounpk3nt/image/upload/v1637069448/i8thatImages/pwsyj2neijmlramk6tun.png"
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
                      <div className="sectBcopy">
                        <h2>Blue Skies</h2>
                        <p className="sectBcopy">
                          We like to travel and our map making projects came out
                          of a personal need to acknowledge and record the
                          special place we’ve been to. Our home life is enriched
                          by having these memories present on our walls. Friends
                          comment and we have responded by expanding this as an
                          offering. If you travel we would love to make you an
                          artwork to help preserve that experience.
                        </p>
                      </div>
                    </Col>
                  </div>
                </Row>
                <Row>
                  <div className="wrapper">
                    <Col md="12">
                      <HCar1 />
                      <h1 id="futureproj">Future Projects</h1>
                      <img
                        src="https://res.cloudinary.com/dounpk3nt/image/upload/v1637075474/i8thatImages/gvklkpy3yopofkyimhon.png"
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

                      <div className="sectBcopy">
                        <h2>Always Thinking</h2>
                        <p className="sectBcopy">
                          Countless Ideas but only so much time in the day.
                          Still we take the time to put down some notes and try
                          and slot new projects into our busy days. Here are
                          just a few of our idea ramblings that have risen to
                          the top. Please let us know what you would like for to
                          bring to life next.
                        </p>
                      </div>
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
