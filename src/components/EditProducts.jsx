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
import APIURL from '../helpers/environment';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productType: this.props.data.productType,
      projectName: this.props.data.productName,
      projectDescription: this.props.data.projectDescription,
      projectPhoto: this.props.data.projectPhoto,
      projectOptionChar: this.props.data.projectOptionChar,
      productQuantity: this.props.data.productQuantity,
      productPrice: this.props.data.productPrice,
      image: '',
      loading: '',
      inCart: false,
      toggle: this.props.toggle, //added for modal
    };
  }

  toggle = () => this.setState({ toggle: !this.state.toggle });
  //   toggle = () => this.setState({ toggle: false });

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('starting');
    try {
      const response = await fetch(
        `${APIURL}/product/update/${this.props.data.id}`,
        {
          method: 'PUT',
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
        }
      );
      console.log(response);
      let data = await response.json();
      this.props.toggle();
      console.log(data);
      this.makeEditProductWork();
    } catch (err) {
      console.log(err);
    }
  };
  // this is a work around for reload issue
  makeEditProductWork = () => {
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
        <h3>Edit </h3>

        <Modal isOpen={this.state.toggle} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <h3>Track Food</h3>
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
                  name="pType"
                  defaultValue={this.props.data.productQuantity}
                  onChange={(e) =>
                    this.setState({ productType: e.target.value })
                  }
                  value={this.state.productType}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pName">Project Name</Label>
                <Input
                  name="pName"
                  defaultValue={this.props.data.projectName}
                  onChange={(e) =>
                    this.setState({ projectName: e.target.value })
                  }
                  value={this.state.projectName}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pDescription">Project Description</Label>
                <Input
                  name="pDescription"
                  //   defaultValue={this.props.data.projectDescription}
                  onChange={(e) =>
                    this.setState({ projectDescription: e.target.value })
                  }
                  value={this.state.projectDescription}
                />
              </FormGroup>

              {/*            
           Start PHOTOUPLOAD */}
              <FormGroup>
                <Label htmlFor="pPhoto">Project Photo</Label>
                <Input
                  defaultValue={this.props.data.projectPhoto}
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
                  name="pOptionChar"
                  defaultValue={this.props.data.projectOptionChar}
                  onChange={(e) =>
                    this.setState({ projectOptionChar: e.target.value })
                  }
                  value={this.state.projectOptionChar}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pQuantity">Project Quantity</Label>
                <Input
                  name="pQuantity"
                  defaultValue={this.props.data.productQuantity}
                  onChange={(e) =>
                    this.setState({ productQuantity: e.target.value })
                  }
                  value={this.state.productQuantity}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="pPrice">Project Price</Label>
                <Input
                  name="pPrice"
                  defaultValue={this.props.data.productPrice}
                  onChange={(e) =>
                    this.setState({ productPrice: e.target.value })
                  }
                  value={this.state.productPrice}
                />
              </FormGroup>

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

export default EditProduct;
