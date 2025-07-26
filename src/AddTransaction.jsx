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
      category : event.target.category.value
    }
    console.log(newTransaction);

    //stores new transaction in local storage
    //stored in stack??
  }

  return (
    <section style = {{border : "1px solid green"}}>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label for="store">Store</label>
        <input type="text" name="store" id="store" placeholder="Target" required/>

        <label for="item">Item</label>
        <input type="text" name="item" id="item" placeholder="Banana" required/>

        <label for="transactionType">Expense or Income?</label>
        <select name="transactionType" id="transactionType" required>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <label for="amount">Amount</label>
        <input type="number" inputMode="numeric" name = "amount" id="amount" min="0" step="0.01" required/>

        <section className="date">
          <label for="day">Day</label>
          <input type="number" min="0" max="31" name="day" id="day" required/>

          <label for="month">Month</label>
          <input type="number" min="1" max="12" name="month" id="month" required/>

          <label for="year">Year</label>
          <input type="number" min="2000" max="2025" name="year" id="year" required/>
        </section>

        <select name="category" id="category" required>
          <option value="" disabled selected>Select Category</option>
          <option value="food" aria-label="food">Food</option>
          <option value="entertainment" aria-label="entertainment">Entertainment</option>
          <option value="school" aria-label="school">School</option>
          <option value="job" aria-label="job">Job</option>
          <option value="health" aria-label="health">Health</option>
        </select>

        <button type="submit">submit</button>

        
      </form>
    </section>
  )
}

export default AddTransaction;
