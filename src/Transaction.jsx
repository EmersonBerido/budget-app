import Colors from "./Colors.js";
import "./Transaction.css"
//will later import images of transaction categories: food, entertainment, etc (all created by libresprite)

//format brainstorming:
//store name in the top left
//amount in the top right
//item in the middle or left-middle
//date will be bottom left or beside the item in the right
//transaction stype will be shown thru the top of the box, like a file folder sticking out with a image and color (entertainment for purple for example)

document.documentElement.style.setProperty("--expense", Colors.expense);
document.documentElement.style.setProperty("--income", Colors.income);
function Transaction(props)
{




  return (
    <article 
      className = "transaction-container"
    >
      <h2 id="store">{props.store}</h2>
      <h2 
        id={props.transactionType === "expense" ? "expense" : "income"}
        >
        {`$${props.amount}`}
      </h2>
      <h2 id="item">{props.item}</h2>
      <h2 id="date">{`${props.date.day} / ${props.date.month} / ${props.date.year}`}</h2>
    </article>
  )
}
export default Transaction;