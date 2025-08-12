function Login(props)
{
  
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
    <main>
      <h1>Budget App</h1>
      <h2>login</h2>
      {isReturningUser ? <h2>Welcome Back :D</h2> : <h2>Sign up</h2>}
      <form onSubmit = {SetupAccount}>
          <input type = "text" name = "password" placeholder = "Enter password" required />
          <button type = "submit">submit</button>
        </form>
    </main>
  )
}

export default Login;