import React, {useEffect, useState} from "react";
import axios from "axios";
import { Users } from './Users';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const UsersComponent = () => {

  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = (url) => {
    axios
      .get(url)
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers(url);
  }, []);

  return(
    <>
      <Container className="main my-5">
        <h2 className="text-center mb-5">Users</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th className="small-show">email</th>
              <th className="medium-show">telefono</th>
              <th className="large-show">ciudad del usuario</th>
              <th className="large-show">nombre de la compañia</th>
            </tr>
          </thead>
          <tbody>
            <Users users={users} />
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export { UsersComponent };