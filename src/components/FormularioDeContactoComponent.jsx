import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioDeContactoComponent = () => {
  const form = document.getElementById('form');
  const inputs = document.querySelectorAll('#form');

  const regExp = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const fieldsFalseTrue = {
    name: false,
    email: false
  }

  const formValidate = (event) => {
    switch (event.target.name) {
      case "name":
        validateField(regExp.name, event.target, 'name');
      break;
      case "email":
        validateField(regExp.email, event.target, 'email');
      break;
      // no default 
    }
  }

  const validateField = (expression, input, area) => {
    if(expression.test(input.value)){
      console.log('Datos ingresados correctamente');
      fieldsFalseTrue[area] = true;
    } else {
      console.log('Datos ingresados erroneamente');
      fieldsFalseTrue[area] = false;
    }
  }
  inputs.forEach((input) => {
    input.addEventListener('keyup', formValidate);
    input.addEventListener('blur', formValidate);
  });
  
  if(fieldsFalseTrue.name && fieldsFalseTrue.email) {
		form.reset();

		document.getElementById('success-message-form').classList.add('success-message-form-active');
		setTimeout(() => {
			document.getElementById('success-message-form').classList.remove('success-message-form-active');
		}, 4000);

		document.querySelectorAll('.container-form-correct').forEach((icon) => {
			icon.classList.remove('container-form-correct');
		});
	}
  
  const [input, setInput] = useState ({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]:value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(input);

    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;

    let body = ``;
    body += `
      <div className="portal-img">
        <img className="portal-img" src="./img/pngfind.png">
      </div> 
      <img className="img-title" src="./img/message.png" alt="Image title message received ">
      <div className="background-mssg">
        <h3 className="text-dimension"> From: Dimensión C-137</h3>
        <div id="text-form">
          <p className = "label-message">Message sent by:</p>
          <p className = "text-message">${nameValue}</p>
          <p className = "label-message">Email:</p>
          <p className = "text-message">${emailValue}</p>
      </div>
    `;
    document.getElementById('message-area').classList.add('message-area-active');
    document.getElementById("received-message").innerHTML = body;
  }
  

  return(
    <>
      <Container className="main my-5">
        <h2 className="text-center"> Formulario de Contacto </h2>
        <Form className="form" id="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label>User:</Form.Label>
              <Form.Control 
                type="name" 
                placeholder="Enter your full name" 
                value={input.name || ""}
              />
              <Form.Text className="text-muted">
                Please complete with your full name.
              </Form.Text>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export { FormularioDeContactoComponent };