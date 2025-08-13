import "./Login.css";
import Colors from "./Colors.js";
import CatBody from "./assets/LoginCat.png";
import CatTail from "./assets/LoginCatTail.png";
import {useNavigate} from "react-router-dom";

function Login(props)
{
  document.documentElement.style.setProperty("--mainText", Colors.mainText);
  
  const isReturningUser = localStorage.getItem("password") !== null;

  const Navigate = useNavigate();

    function SetupAccount(event)
    {
      //check if its a returning user via local storage
      event.preventDefault();
      if (isReturningUser){
        if (event.target.password.value === localStorage.getItem("password")){
          //props.setLogin(true);
          Navigate("/App");
        }
        else {
          alert("Incorrect password");
        }
      }
      else {
        localStorage.setItem("password", event.target.password.value)
      }
    }

  return (
    <main className="login-container">
      <div className="title-login-container">
        <h1>Purrfect Budget</h1>
        {isReturningUser ? <h3>Welcome Back !</h3> : <h3>Sign up !</h3>}
        <div className="cat-container">
          <img src={CatBody} className="cat-body"/>
          <img src={CatTail} className="cat-tail"/>
        </div>
      </div>

      
      <form onSubmit = {SetupAccount} className="login-form-container">
        <input type = "password" name = "password" placeholder = "Enter password" required />
        <button type = "submit">Login !</button>
      </form>
    </main>
  )
}

export default Login;