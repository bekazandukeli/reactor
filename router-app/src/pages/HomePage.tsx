import { useContext } from "react";
import { useLocation } from "react-router-dom"
import { UserContext } from "../App";

export default function HomePage() {
  const location = useLocation();
  const context = useContext(UserContext);

  console.log(location);

  return (
    <div>
      HomePage
      <button onClick={() => {
        context?.setIsLoggedIn(current => !current)
      }}>
        {context?.isLoggedIn ? 'log out' : 'log in'}
      </button>
    </div>
  )
}
