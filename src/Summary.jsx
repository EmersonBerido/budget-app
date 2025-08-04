function Summary() 
{
  const data = JSON.parse(localStorage.getItem("userInfo") || []);

  //overall spending and income
  let totalSpent = 0, totalIncome = 0;

  const createEmptyAmount = () => ({expense : 0, income : 0});
  let food = createEmptyAmount(),
      entertainment = createEmptyAmount(),
      school = createEmptyAmount(),
      job = createEmptyAmount(),
      health = createEmptyAmount();

  //look over every transaction and if income add to totalIncome, vice versa for totalSpent
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
      default:
        console.error("Unknown transaction type: ", transaction.transactionType);
        break;
    }
  })
  totalIncome = food.income + entertainment.income + school.income + job.income + health.income; 
  totalSpent = food.expense + entertainment.expense + school.expense + job.expense + health.expense;

  return (
    <section>
      <h1>summary</h1>
      <h2>Total Income: {totalIncome}</h2>
      <h2>Total Spent: {totalSpent}</h2>
    </section>
  )
}

export default Summary;