import "./AddTransaction.css";
import Colors from "./Colors.js";

const primary = Colors.primary;
console.log(primary)
document.documentElement.style.setProperty("--primary", primary);

//---Important Notes---
//id is started at 0; kept for deletion purposes later


//TODO: Add aria labels to inputs; work on css
//TODO: Refresh page after adding transaction
function AddTransaction() {
  //add transactions in userInfo array of objects in local storage
  //objects will contain {store/Location name (will be the title of the object), what was bought, if it was an income or expense, amount used, date, category}}

  function handleSubmit(event){
    //stops refreshing
    event.preventDefault();

    //creats object of new transaction values
    const newTransaction = {
      store : event.target.store.value,
      item : event.target.item.value,
      transactionType : event.target.transactionType.value,
      amount : event.target.amount.value,
      date : {
        day : event.target.day.value,
        month : event.target.month.value,
        year : event.target.year.value,
      },
      category : event.target.category.value,
      id : localStorage.getItem("userInfo") !== null ? JSON.parse(localStorage.getItem("userInfo")).length : 0
    }
    console.log(newTransaction);

    //ENCRYPT DATA AFTER LEARNING NODE JS

    //stores new transaction in local storage
    //maybe use a stack to store transactions
    let userInfo;
    try {
      userInfo = JSON.parse(localStorage.getItem("userInfo")) || []
    }
    catch (error){
      console.error("error when parsing userInfo from local storage:", error)
    }
    finally {
      userInfo.push(newTransaction);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    //stored in stack??
  }

  return (
    <section className="add-transaction-container">
      <h1>Add Transaction</h1>
      <form 
        onSubmit={handleSubmit}
        className="form-container"
      >
        <div className="store-item-container">

          <label htmlFor="store">Store</label>
          <input type="text" name="store" id="store" placeholder="Target" required/>

          <label htmlFor="amount">Amount</label>
          <input type="number" inputMode="numeric" name = "amount" id="amount" min="0" step="0.01" required/>

        </div>

        <label htmlFor="item">Item</label>
        <input type="text" name="item" id="item" placeholder="Banana" required/>

        <label htmlFor="transactionType">Expense or Income?</label>
        <select name="transactionType" id="transactionType" defaultValue="" required>
          <option value="" disabled>Select Type</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select name="category" id="category" defaultValue="" required>
          <option value="" disabled>Select Category</option>
          <option value="food" aria-label="food">Food</option>
          <option value="entertainment" aria-label="entertainment">Entertainment</option>
          <option value="school" aria-label="school">School</option>
          <option value="job" aria-label="job">Job</option>
          <option value="health" aria-label="health">Health</option>
        </select>

        <section className="date">
          <label htmlFor="day">Day</label>
          <input type="number" min="0" max="31" name="day" id="day" placeholder="day" required/>

          <label htmlFor="month">Month</label>
          <input type="number" min="1" max="12" name="month" id="month" required/>

          <label htmlFor="year">Year</label>
          <input type="number" min="2000" max="2025" name="year" id="year" required/>
        </section>

        <button type="submit">submit</button>

        
      </form>
    </section>
  )
}

export default AddTransaction;
