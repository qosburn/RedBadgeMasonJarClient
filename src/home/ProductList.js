





/// This was not used it was pulled into HOME
//
/// This was not used it was pulled into HOME
//
/// This was not used it was pulled into HOME
//
/// This was not used it was pulled into HOME
//
/// This was not used it was pulled into HOME





import React, { Component } from 'react';
import { Container } from 'reactstrap';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ({this.props.product.map((product, index) => {
          return ( 
          <Card key={index}>
            {/* <CardImg top width="100%" src={product.photo} alt="Card image cap" /> */}
            <CardBody>
              <CardTitle tag="h1">{data.productType}</CardTitle>
              <CardText>
                <ul type="none">
                  <li>Place: {data.projectName}</li>
                  <li>Total Calories: {data.projectDescription}</li>
                  <li>Feelings: {data.projectOptionChar}</li>
                  </ul> 
              </CardText>
              </CardBody>
              </Card> 
              );
            })});




    
}

export default ProductList;
