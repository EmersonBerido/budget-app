import {useNavigate} from "react-router-dom";
function Header()
{
  const Navigate = useNavigate();
  return (
    <header>
      <button onClick={() => Navigate("/AllTransaction")}>All Transactions</button>
      <button onClick={() => Navigate("/App")}>Monthly Transactions</button>
      <button onClick={() => Navigate("/Settings")}>Settings</button>
    </header>
  )
}
export default Header;