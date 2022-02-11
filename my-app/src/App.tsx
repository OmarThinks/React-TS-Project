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

  interface User2 {
    name: string,
    id: number,
    username: string
  }



  const user1 : User = {
    name: "Hayes",
    id: 0,
  };
  const user2 : User = {
    name: "Hayes",
    id: 0,
  };
  const user3 : User = {
    name: "Hayes",
    id: 0,
  };


  const user4: User2 = {
    name: "Hayes",
    id: 0,
    username:"Hi"
  };
  

  console.log(user1);
  console.log(user2);
  console.log(user1==user2);
  console.log(user1===user2);


function getUserName (user : User){
  return user.name;
}

console.log(getUserName(user1));
console.log(getUserName(user4));



  type MyBool = true | false|number;


  const bool1 : MyBool =5;

  console.log(bool1);

  
  return (
    <div className="App">
Hi
    </div>
  );
}

export default App;
