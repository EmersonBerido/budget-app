import { useState, useEffect } from 'react';

import Overview from "./Overview.jsx";
import AddTransaction from './AddTransaction.jsx';
import Transaction from "./Transaction.jsx"
import Summary from "./Summary.jsx";
import mergeSort from './MergeSort.js';
import './App.css';

import Colors from "./Colors.js";

document.documentElement.style.setProperty("--border", Colors.mainBorder)


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  //Local Storage
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
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionList.map((current, index) => {
      return <Transaction 
        id = {current.id}
        key = {current.id}
        store = {current.store}
        amount = {current.amount}
        item = {current.item}
        transactionType = {current.transactionType}
        category = {current.category}
        date = {current.date}
        setList = {setTransactionList}
      />
    }))
  },[transactionList])

  //filter
  function handleFilter(selection)
  {
    setTransactionList((list) => 
      mergeSort(list, selection)
    );
  }

  //Reverse list
  function handleReverse()
  {
    setTransactionList((list) => {
      let reversed = list.slice();

      return reversed.reverse();
    })
  }

  //for checking if two objects are the same (for deleting entries), do JSON.stringify(obj) === JSON.stringify(copy)

  // -- Merge Sort --
  //checking sort by date
  //console.log("date: ", mergeSort(transactionList, "date"));
  // //checking sort by category
  //console.log("category", mergeSort(transactionList, "category"));
  // //checking sort by price
  //console.log("price", mergeSort(transactionList, "price"));

  // -- Styling --
  //document.documentElement.style.setProperty("--secondary", Colors.secondary);


  return (
    <main className="app-container">
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
      {transactionList.length > 0 && 
        <main className="info-container">
          <Summary/>
          <section className="viewable-transactions-container">
            <div className="filters-container">
              <button className="filter" onClick={() => handleFilter("category")}>Group</button>
              <button className="filter" onClick={() => handleFilter("price")}>Price</button>
              <button className="filter" onClick={() => handleFilter("date")}>Date</button>
              <button className="filter" onClick={handleReverse}>Reverse</button>
              <button className="add-button">+</button>
            </div>
            <main className="transactions-container">
              {transactions}
            </main>
          </section>
        </main>
      }
      
      

    </main>
  )
}

export default App
