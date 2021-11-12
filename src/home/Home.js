import React, { Component } from 'react';
import {
  // Container,
  // Media,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  // CardSubtitle,
  Button,
  CardBody,
} from 'reactstrap';
import EditProduct from '../components/EditProducts';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productEntries: [],
      toggle2: false, //added for second modal
      productEntry: {}, // edit entry
    };
  }

  fetchProdEntries = async (event) => {
    // event.preventDefault();
    console.log('firing');
    try {
      const response = await fetch('http://localhost:3000/product/get', {
        method: 'GET',

        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
      });
      let data = await response.json();
      console.log(data);
      this.setState({ productEntries: data });
      console.log(this.productEntries);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.fetchProdEntries();
  }

  deleteProductEntry = (id) => {
    fetch(`http://localhost:3000/product/delete/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
    }).then(() => this.fetchProdEntries());
    // console.log({ this.productEntries });
  };
  // this starts Edit
  editProductEntry = (data) => {
    this.setState({ productEntry: data });
  };

  toggle2 = () => this.setState({ toggle2: !this.state.toggle2 });

  // this ends Edit

  // this is the open of product map stuff
  prodMapper = () => {
    console.log(this.state.toggle2);
    return this.state.productEntries.map((data, index) => {
      return (
        <Card key={index}>
          <CardImg
            top
            width="100%"
            src={data.projectPhoto}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h1">{data.projectName}</CardTitle>
            <CardText>
              <ul type="none">
                <li>Product Description: {data.projectDescription}</li>
                <li>Product Options: {data.projectOptionChar}</li>
                <li>Product Qty: {data.productQuantity}</li>
                <li>Product Price: {data.productPrice}</li>
              </ul>
              <Button
                className="button2"
                onClick={(event) => {
                  this.toggle2();
                  this.editProductEntry(data);
                  //this.setState.EditProduct(data.id);
                }}
              >
                Edit
              </Button>
              <Button
                className="button1"
                onClick={() => {
                  this.deleteProductEntry(data.id);
                }}
              >
                Delete
              </Button>
            </CardText>
          </CardBody>
        </Card>
      );
    });
  };
  ///this is the close

  render() {
    return (
      <>
        <h1> Welcome to MJD</h1>
        <CardColumns> {this.prodMapper()}</CardColumns>

        {this.state.toggle2 && (
          <EditProduct
            data={this.state.productEntry}
            toggle={this.toggle2}
            token={this.props.token}
          />
        )}
      </>
    );
  }
}

export default Home;
