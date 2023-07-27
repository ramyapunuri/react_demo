import React, { useState } from 'react';
import AddUser1 from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [username,setusername] = useState([]);

  const AddUserHandler = (u_Name,u_Age) =>{
    setusername((prev_name) => {
    return [
      ...prev_name,
      { name : u_Name ,age:u_Age, id:Math.random().toString()},
    ];
  });
  };
  return (
    <div>
      <AddUser1 onAddUser={AddUserHandler}/>
      <UserList users={username}/>
    </div>
  );
}

export default App;
