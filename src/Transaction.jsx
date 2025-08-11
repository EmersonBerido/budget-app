import Colors from "./Colors.js";
import "./Transaction.css"
import logo from "./assets/react.svg"
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
document.documentElement.style.setProperty("--mainText", Colors.mainText);
document.documentElement.style.setProperty("--subText", Colors.subText);
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

  const transactionContainerStyle = {
    position : "relative",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor: Colors.secondary,
    border : `3px solid ${Colors.mainBorder}`,
    boxShadow: `0px -6px ${Colors[props.category]}`,
    fontSize: "24px",
    width : "100%",
    maxWidth: "750px",
    minHeight : "150px",
    borderRadius : "13px",
  };

  const iconStyle = {
    position : "absolute",
    left : "50%",
    top : "50%",
    width : "auto",
    height : "100%",
    transform : "translate(-50%, -50%)",
    opacity : 0.25
    


  }

  return (
    <article 
      className = "transaction-container"
      style={transactionContainerStyle}
    >
      <img src={logo} style={iconStyle}/>
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