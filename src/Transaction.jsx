import Colors from "./Colors.js";
import "./Transaction.css"
//will later import images of transaction categories: food, entertainment, etc (all created by libresprite)

//format brainstorming:
//store name in the top left
//amount in the top right
//item in the middle or left-middle
//date will be bottom left or beside the item in the right
//bottom will have a trash icon where the user can delete transaction
//transaction stype will be shown thru the top of the box, like a file folder sticking out with a image and color (entertainment for purple for example)

document.documentElement.style.setProperty("--expense", Colors.expense);
document.documentElement.style.setProperty("--income", Colors.income);
function Transaction(props)
{
  function handleDelete()
  {
    console.log("delete test", props.id);
    console.log(props);
    props.setList(prevList => {
      return prevList.filter(curr => curr.id !== props.id);
    })
  }



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
      <button onClick={handleDelete}>
        Trash
      </button>
    </article>
  )
}
export default Transaction;