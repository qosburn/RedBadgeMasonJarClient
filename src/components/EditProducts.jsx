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
} from 'reactstrap';

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
      inCart: false,
      //toggle2: false, //added for modal
    };
  }

  //   toggle = () => this.setState({ toggle2: !this.state.toggle2 });
  //   toggle = () => this.setState({ toggle: false });

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/product/update/${this.props.data.id}`,
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
  makeEditProductWork = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };
  render() {
    return (
      <div>
        <h3>Edit </h3>

        <Modal isOpen={true}>
          <ModalHeader toggle={this.toggle}>
            <h3>Track Food</h3>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
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
              <FormGroup>
                <Label htmlFor="pPhoto">Project Photo</Label>
                <Input
                  name="pPhoto"
                  defaultValue={this.props.data.projectPhoto}
                  onChange={(e) =>
                    this.setState({ projectPhoto: e.target.value })
                  }
                  value={this.state.projectPhoto}
                />
              </FormGroup>
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
