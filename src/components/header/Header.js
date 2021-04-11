import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import history from "../../assets/icons/history.svg";
import home from "../../assets/icons/home.svg";
import addBtn from "../../assets/icons/add-button.svg";
import portada from "../../assets/header-x1.png";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.js";
import { ProdContext } from "../../context/ProductContext.js";

export default function Header() {
  const { user } = useContext(UserContext);
  const {showHistory} = useContext(ProdContext);
  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === "history") {
      e.target.id = "home";
      e.target.src = home;
      showHistory("home");
    } else {
      e.target.id = "history";
      e.target.src = history;
      showHistory("history");
    }
    
  };
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
          <img
            src={history}
            alt={"history logo"}
            onClick={handleClick}
            className="headerBtn"
            id="history"
          ></img>
          <img src={addBtn} alt={"add button"} className="headerBtn"></img>
        </div>
      </section>
      <section className="banner">
        <img src={portada} alt="" />
        <h1>Electrónica</h1>
      </section>
    </header>
  );
}
