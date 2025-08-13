import "./Login.css";
import Colors from "./Colors.js";

function Login(props)
{
  document.documentElement.style.setProperty("--mainText", Colors.mainText);
  
  const isReturningUser = localStorage.getItem("password") !== null;

    function SetupAccount(event)
    {
      //check if its a returning user via local storage
      event.preventDefault();
      if (isReturningUser){
        if (event.target.password.value === localStorage.getItem("password")){
          props.setLogin(true);
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
        <h1>Pudget</h1>
        {isReturningUser ? <h3>Welcome Back !</h3> : <h3>Sign up !</h3>}
        <img src="https://imgs.search.brave.com/Kee2lIE0h2X2U51Naki82DZc40JxjskPcWHunvPeC8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/ODcwLzc2MC9zbWFs/bC9vcmFuZ2UtdGFi/YnktY2F0LXRyYW5z/cGFyZW50LXBuZy5w/bmc"/>
      </div>

      
      <form onSubmit = {SetupAccount} className="login-form-container">
        <input type = "text" name = "password" placeholder = "Enter password" required />
        <button type = "submit">Login !</button>
      </form>
    </main>
  )
}

export default Login;