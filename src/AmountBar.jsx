//receives category, amount, total
function AmountBar(props){
  return (
    <div style = {{border : "1px solid pink"}}>
      <h2>{props.category}</h2>
    </div>
  )
}
export default AmountBar;