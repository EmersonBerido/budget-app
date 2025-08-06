import { useState, useEffect } from 'react';

import Overview from "./Overview.jsx";
import AddTransaction from './AddTransaction.jsx';
import Transaction from "./Transaction.jsx"
import Summary from "./Summary.jsx";

import './App.css';

//TODO FUTURE IDEAS: sort by date/category/amount, figure out how to encrypt data in localStorage later
//TODO: refresh page after adding transaction

function App() {
  //-- States --
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  //-- Local Storage --
  //const transactionList = localStorage.getItem("userInfo") !== null ? JSON.parse(localStorage.getItem("userInfo")) : []
  const [transactionList, setTransactionList] = useState(localStorage.getItem("userInfo") !== null ? JSON.parse(localStorage.getItem("userInfo")) : []);
  

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
  let transactions;
  if (transactionList.length > 0){

    //if there is user transaction info, parse it
    transactions = transactionList.map((current, index) => {
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
  //MergeSort transactions :(

  //basic format of mergesort; still need to integrate selection into it
  const mergeSort = function(arr, selection = "temp"){
    if (arr.length < 2)
    {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
    
  }
  function merge(left, right){
    const sorted = [];
    while (left.length && right.length)
    {
      // if (left[0] > right[0]){
      //   sorted.push(right.shift);
      // }
      // else {
      //   sorted.push(left.shift);
      // }
      sorted.push(
        compareDate(left[0], right[0]) === left[0] ? 
        left.shift() :
        right.shift()
      )
    }
    return [...sorted, ...left, ...right]
  }

  //Comparison Methods: Date, Price, and Category
  function compareDate(left, right)
  {
    //returns smaller 
    //first check by year, then month, then date
    if (left.date.year > right.date.year)
    {
      return right;
    }
    else if (right.date.year > left.date.year)
    {
      return left;
    }
    else 
    {
      //now check month
      if (left.date.month > right.date.month)
      {
        return right;
      }
      else if (right.date.month > left.date.month)
      {
        return left;
      }
      else 
      {
        //now check day
        if (left.date.day >= right.date.month)
        {
          return right;
        }
        else
        {
          return left;
        }
      }
    }
  }

  console.log(mergeSort(transactionList))
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
      <AddTransaction
        list = {transactionList}
        setList = {setTransactionList}
      />
      {transactionList.length > 0 && <Summary/>}
      {transactions}
      
      

    </>
  )
}

export default App
