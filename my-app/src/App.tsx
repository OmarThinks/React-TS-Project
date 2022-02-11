import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  const helloWorld : string = "Hi";
  console.log(helloWorld);
  

  interface User {
    name: string,
    id: number
  }



  const user1 : User = {
    name: "Hayes",
    id: 0,
  };
  const user2 : User = {
    name: "Hayes",
    id: 0,
  };

  console.log(user1);
  console.log(user2);
  console.log(user1==user2);
  console.log(user1===user2);


function getUserName (user : User){
  return user.name;
}

  console.log(getUserName(user1));

  
  return (
    <div className="App">
Hi
    </div>
  );
}

export default App;
