import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Container,
} from 'reactstrap';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productType: '',
      projectName: '',
      projectDescription: '',
      projectPhoto: '',
      projectOptionChar: '',
      productQuantity: '',
      productPrice: '',
      image: '',
      loading: '',
      inCart: false,
      toggle: false, //added for modal
    };
  }

  toggle = () => this.setState({ toggle: !this.state.toggle });
  //   toggle = () => this.setState({ toggle: false });

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('firing');
    try {
      const response = await fetch('http://localhost:3000/product/create', {
        method: 'POST',
        body: JSON.stringify({
          productType: this.state.productType,
          projectName: this.state.projectName,
          projectDescription: this.state.projectDescription,
          projectPhoto: this.state.projectPhoto,
          projectOptionChar: this.state.projectOptionChar,
          productQuantity: this.state.productQuantity,
          productPrice: this.state.productPrice,
          inCart: this.state.inCart,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
      });
      console.log(response);
      let data = await response.json();
      console.log(data);
      //   this.props.updateToken(data.sessionToken);
      //   this.setState.projectDescription: '';
      this.setState({
        productType: '',
        projectName: '',
        projectDescription: '',
        projectPhoto: '',
        projectOptionChar: '',
        productQuantity: '',
        productPrice: '',
        inCart: false,
      });
      this.makeAddProductWork();
    } catch (err) {
      console.log(err);
    }
  };
  // this is a work around for reload issue
  makeAddProductWork = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };

  // START UPLOAD SECTION
  UploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'i8Images');
    this.setState({ loading: true });

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dounpk3nt/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const File = await res.json();
    console.log(File.secure_url);
    this.setState({
      image: File.secure_url,
      loading: false,
      projectPhoto: File.secure_url,
    });
  };

  // END UPLOAD SECTION

  render() {
    return (
      <div>
        <h3>Add Creation</h3>
        <p class="nav" onClick={this.toggle}>
          Create Product
        </p>

        <Modal isOpen={this.state.toggle} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <h3>Add Product Item</h3>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              {/*            
           START PHOTOUPLOAD */}
              {this.state.loading ? (
                <h3>Loading...</h3>
              ) : (
                <center>
                  <img
                    src={this.state.image}
                    style={{ width: '300px' }}
                    alt=""
                  />
                </center>
              )}

              {/*            
           End PHOTOUPLOAD */}

              <FormGroup>
                <Label htmlFor="pType">Product Type</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ productType: e.target.value })
                  }
                  name="pType"
                  value={this.state.productType}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pName">Project Name</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ projectName: e.target.value })
                  }
                  name="pName"
                  value={this.state.projectName}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pDescription">Project Description</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ projectDescription: e.target.value })
                  }
                  name="pDescription"
                  value={this.state.projectDescription}
                />
              </FormGroup>
              {/*            
           Start PHOTOUPLOAD */}
              <FormGroup>
                <Label htmlFor="pPhoto">Project Photo</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ projectPhoto: e.target.value })
                  }
                  name="pPhoto"
                  value={this.state.projectPhoto}
                />
                <Container>
                  <br />
                  <FormGroup>
                    <Input
                      type="file"
                      name="file"
                      className="photoupload"
                      placeholder="Upload your file here"
                      onChange={this.UploadImage}
                    />
                  </FormGroup>
                </Container>
              </FormGroup>

              {/*            
           End PHOTOUPLOAD */}

              <FormGroup>
                <Label htmlFor="pOptionChar">Project Optional Character</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ projectOptionChar: e.target.value })
                  }
                  name="pOptionChar"
                  value={this.state.projectOptionChar}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pQuantity">Project Quantity</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ productQuantity: e.target.value })
                  }
                  name="pQuantity"
                  value={this.state.productQuantity}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pPrice">Project Price</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ productPrice: e.target.value })
                  }
                  name="pPrice"
                  value={this.state.productPrice}
                />
              </FormGroup>
              {/* <FormGroup>
            <Label htmlFor="pInCart">Is In Cart</Label>
            <Input
              onChange={(e) => this.setState({ inCart: e.target.value })}
              name="pInCart"
              value={this.state.inCart}
            />
          </FormGroup> */}
              <Button className="button" type="submit" onClick={this.toggle}>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddProduct;
