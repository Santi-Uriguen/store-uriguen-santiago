import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import portada from "../../assets/header-x1.png";
import { useContext } from "react";
import {UserContext} from "../../context/UserContext.jsx";
export default function Header() {
  const {user} = useContext(UserContext);
  return (
    <header className="header">
      <section className="upBar">
        <img src={logo} alt="logo" id="headerLogo" />
        <div className="upBarInfo">
          <h3>{user.name}</h3>
          <div>
            <p>{user.points}</p>
            <img src={coin} alt="" />
          </div>
        </div>
      </section>
      <section className="banner">
        <img src={portada} alt="" />
        <h1>Electrónica</h1>
      </section>
    </header>
  );
}
