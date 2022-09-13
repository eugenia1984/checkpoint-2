import React from 'react';

const Users = ({users}) => {
  return (
    <>         
      {
        users.map((item, index) => (
          <tr>
            <td key={index}>{item.id}</td>
            <td>{item.username}</td>
            <td className="small-show">{item.email}</td>
            <td className="medium-show">{item.phone}</td>
            <td className="large-show">{item.address.city}</td>
            <td className="large-show">{item.company.name}</td>
          </tr>
        ))}
    </>
  );
};

export {Users};