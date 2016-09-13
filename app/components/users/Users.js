import React from 'react';
import ReactDOM from 'react-dom';

const Users = ({
  users
}) => (
  <div className="container users-list">
    <div className="row">
      <div className="col-md-12">
        <div className="panel">
          {users.map(user=>{
            return (
              <p key={user.id}>{user.name}</p>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

export default Users;