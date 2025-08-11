import AmountBar from "./AmountBar.jsx";
import "./Summary.css";
import Colors from "./Colors.js";

//maybe use state to store total income and total spent so we can force a rerender when new transaction is added
function Summary() 
{
  //styling
  document.documentElement.style.setProperty("--primary", Colors.primary);
  document.documentElement.style.setProperty("--mainText", Colors.mainText);
  document.documentElement.style.setProperty("--subText", Colors.subText);
  document.documentElement.style.setProperty("--mainBorder", Colors.mainBorder);


  const data = JSON.parse(localStorage.getItem("userInfo") || []);

  //overall spending and income
  let totalSpent = 0, totalIncome = 0;

  const createEmptyAmount = (name) => ({name : name, expense : 0, income : 0});
  let food = createEmptyAmount("food"),
      entertainment = createEmptyAmount("entertainment"),
      school = createEmptyAmount("school"),
      job = createEmptyAmount("job"),
      health = createEmptyAmount("health");

  //look over every transaction and if income add to totalIncome, vice versa for totalSpent for each category
  data.forEach( (transaction) => {

    switch (transaction.transactionType){
      case "income":
        switch (transaction.category) {
          case "food":
            food.income += parseFloat(transaction.amount);
            break;
          case "entertainment":
            entertainment.income += parseFloat(transaction.amount);
            break;
          case "school":
            school.income += parseFloat(transaction.amount);
            break;
          case "job":
            job.income += parseFloat(transaction.amount);
            break;
          case "health":
            health.income += parseFloat(transaction.amount);
            break;
          default:
            console.error("unable to find category: ", transaction.category);
            break;
        }
        break;
      case "expense":
        switch (transaction.category) {
          case "food":
              food.expense += parseFloat(transaction.amount);
              break;
            case "entertainment":
              entertainment.expense += parseFloat(transaction.amount);
              break;
            case "school":
              school.expense += parseFloat(transaction.amount);
              break;
            case "job":
              job.expense += parseFloat(transaction.amount);
              break;
            case "health":
              health.expense += parseFloat(transaction.amount);
              break;
            default:
              console.error("unable to find category: ", transaction.category);
              break;
        }
        break;
      default:
        console.error("Unknown transaction type: ", transaction.transactionType);
        break;
    }
  });

  //Calculate totals for Income and expenses
  totalIncome = food.income + entertainment.income + school.income + job.income + health.income; 
  totalSpent = food.expense + entertainment.expense + school.expense + job.expense + health.expense;

  //produce a bar of each category showing how much was spent and earned in a single bar
  const createBar = (category, type, amount, total) => {
    return (
      <AmountBar 
        category = {category}
        amount = {amount}
        total = {total}
        key = {`${category}-${type}`}
      />
    )
  }

  //create bars for each category
  const incomeBars = [food, entertainment, school, job, health].map((category) => {
    return (
      createBar(category.name, "income", category.income, totalIncome)
    )
  })
  const expenseBars = [food, entertainment, school, job, health].map( (category) => {
    return (
      createBar(category.name, "expense", category.expense, totalSpent)
    )
  })

  return (
    <section className="summary-container">
      <h1>Overview</h1>
      <h2 className="totals">Total Income: ${totalIncome.toFixed(2)}</h2>
      <div className="transaction-list-container">
        {incomeBars}
      </div>
      <h2 className="totals">Total Spent: ${totalSpent.toFixed(2)}</h2>
      <div className="transaction-list-container">
        {expenseBars}
      </div>
    </section>
  )
}

export default Summary;