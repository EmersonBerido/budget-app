import Colors from "./Colors.js";
import "./AmountBar.css";

//receives category, amount, total

//it'll look like a loading bar, with the amount filled being the amount / total
//the bar will have two different styles; one in this file, the other in its respective css
//this file will be used to adjust the width of the bar
//css file will adjust the color/overall style of the bar
function AmountBar(props){
  const barWidth = props.total > 0 ? (props.amount / props.total) * 100 : 0;
  const barPercentage = 60;
  const categoryPercentage = 100 - barPercentage;

  const barContainerStyle = {
    width : "90%",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    gap : "5px"
  }
  const categoryStyle = {
    width : `${categoryPercentage}%`,
    textAlign : "right",

  }
  const barStyle = {
    border: "2px solid black",
    borderRadius : "px",
    width : `${barPercentage}%`,
    height : "15px",
    backgroundColor : "#ffffff",
  }
  const barFillStyle = {
    backgroundColor : Colors[props.category],
    height : "100%",
    width : `${barWidth}%`
  }
  return (
    <section style = {barContainerStyle}>
      <label htmlFor={props.category} style = {categoryStyle}>{props.category}</label>
      <div style = {barStyle}>
        <div style = {barFillStyle}/>
      </div>
    </section>
  )
}

export default AmountBar;