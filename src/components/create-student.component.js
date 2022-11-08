import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this)
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this)
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = { 
      name:"",
      email:"",
      rollno:"",
     }
  }

  onChangeStudentName(e) {
    this.setState({name: e.target.value})
  }
  onChangeStudentEmail(e) {
    this.setState({email: e.target.value})
  }
  onChangeStudentRollno(e) {
    this.setState({rollno: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();
    const StundentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
    }

    axios
    .post("http//:localhost:4000/students/create-student", StundentObject)
    .then((res) => console.log(res.data));
    this.setState({name: "", email: "", rollno: ""});
  }
  
  render() {
    return (
      <div class="form-wrapper">
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Código</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button
            variant="dark"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Estudiantes
          </Button>
        </Form>
      </div>
    );
  }
}


