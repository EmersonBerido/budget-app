import { useState, useEffect } from 'react';

import Overview from "./Overview.jsx";
import AddTransaction from './AddTransaction.jsx';
import Transaction from "./Transaction.jsx"

import './App.css';

//TODO FUTURE IDEAS: sort by date/category/amount, figure out how to encrypt data in localStorage later
//TODO: refresh page after adding transaction

function App() {
  //-- States --
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  //-- Local Storage --
  const transactionList = localStorage.getItem("userInfo") !== null ? JSON.parse(localStorage.getItem("userInfo")) : []
  

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

  //--- creates list of transactions that'll be displayed ---
  let transaction;
  if (transactionList.length > 0){

    //if there is user transaction info, parse it
    const info = JSON.parse(localStorage.getItem("userInfo"));
    transaction = info.map((current, index) => {
      return <Transaction 
        key = {index}
        store = {current.store}
        amount = {current.amount}
        item = {current.item}
        transactionType = {current.transactionType}
        date = {current.date}
      />
    })
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

      {
        //if user is logged in, show details
      }
      {isUserLoggedIn && 
        <>
          <h2>Added the right password</h2>
        </>
      }

      </header>
      <Overview/>
      <AddTransaction/>
      {transaction}

    </>
  )
}

export default App
