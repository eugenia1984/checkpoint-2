import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const UsersComponent = () => {
  return(
    <>
      <Container className="my-5">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>id</th>
            <th>email</th>
            <th>telefono</th>
            <th>ciudad del usuario</th>
            <th>nombre de la compañia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </>
  );
};

export { UsersComponent };