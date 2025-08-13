import { useState, useEffect } from 'react';

import Login from "./Login.jsx";
import AddTransaction from './AddTransaction.jsx';
import Transaction from "./Transaction.jsx"
import Summary from "./Summary.jsx";
import mergeSort from './MergeSort.js';
import './App.css';

import Colors from "./Colors.js";

document.documentElement.style.setProperty("--border", Colors.mainBorder)


function App() {
  const [displayAdd, setDisplayAdd] = useState(false);

  //Local Storage
  const [transactionList, setTransactionList] = useState(localStorage.getItem("userInfo") !== null ? JSON.parse(localStorage.getItem("userInfo")) : []);

  //--- creates list of transactions that'll be displayed ---
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionList.map((current) => {
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
      {displayAdd &&
        <AddTransaction
          list = {transactionList}
          setList = {setTransactionList}
          remove = {setDisplayAdd}
        />
      }
      {transactionList.length > 0 && 
        <main className="info-container">
          <Summary/>
          <section className="viewable-transactions-container">
            <div className="filters-container">
              <button className="filter" onClick={() => handleFilter("category")}>Group</button>
              <button className="filter" onClick={() => handleFilter("price")}>Price</button>
              <button className="filter" onClick={() => handleFilter("date")}>Date</button>
              <button className="filter" onClick={handleReverse}>Reverse</button>
              <button className="add-button" onClick={() => setDisplayAdd(prev => !prev)}>+</button>
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
