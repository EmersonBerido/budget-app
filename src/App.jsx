import { useState } from 'react';

import Overview from "./Overview.jsx";

import './App.css';


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  

  // --- Login Functionality ---
  const isReturningUser = localStorage.getItem("password") !== null

  //handles password submission
  function SetupAccount(event){
    //check if its a returning user via local storage
    event.preventDefault();
    if (isReturningUser){
      if (event.target.password.value === localStorage.getItem("password")){
        setIsUserLoggedIn(true);
      }
      else {
        alert("Incorrect password");
      }
    }
    else {
      localStorage.setItem("password", event.target.password.value)
    }
  }

  //--- Information to be passed as props; objects ---
  //user info will be stored/obtained from local storage; figure out how to encrypt later
  //user info in local storage will be stringified array of objects using JSON.stringify
  if (localStorage.getItem("userInfo") !== null){
    //if there is user transaction info, parse it
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    //user info will be an array of objects, objects will contain {store/Location name, what was bought, if it was an income or expense, amount used, date, category}}
    //user info will be added in a file called AddTransaction.jsx
  }
  else {
    //if theres nothing skip???
  }

  return (
    <>
      <header className = "login-container">
        <h1>title</h1>
        {isReturningUser ? <h2>Welcume</h2> : <h2>Sign up</h2>}
        <form onSubmit = {SetupAccount}>
          <input type = "text" name = "password" placeholder = "Enter password" required />
          <button type = "submit">submit</button>
        </form>

      {isUserLoggedIn && 
        <>
          <h2>Added the right password</h2>
        </>
      }

      </header>
      <Overview/>
    </>
  )
}

export default App
