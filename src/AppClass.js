import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Sitebar from './components/Sitebar';
import Home from './home/Home';
import Auth from './auth/Auth';
import './App.css';
import AddProduct from './components/AddProduct';

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

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem('token') ? (
      <div>
        Happy MOre JOY
        <Home token={this.state.sessionToken} />
      </div>
    ) : (
      <Auth updateToken={this.updateToken} />
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
            <Header />
            <Router>
              <div>
                <Row>
                  <div class="sidebar">
                    <Col md="25">{this.protectedViewSide()} </Col>
                  </div>
                  <div class="wrapper">
                    <Col md="9">{this.protectedViews()} </Col>
                  </div>
                  <div class="footer">Copyright &copy; 20213333</div>
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
