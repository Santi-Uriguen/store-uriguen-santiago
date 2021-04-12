import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import history from "../../assets/icons/history.svg";
import home from "../../assets/icons/home.svg";
import addBtn from "../../assets/icons/add-button.svg";
import closeBtn from "../../assets/icons/close.svg";
import portada from "../../assets/header-x1.png";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.js";
import { ProdContext } from "../../context/ProductContext.js";

export default function Header() {
  const { user, pointsAdder } = useContext(UserContext);
  const { showHistory } = useContext(ProdContext);
  const handleClick = (e) => {
    const prodContainer = document.getElementById("prodContainer");
    const headContainer = document.getElementById("headContainer");
    const footerContainer = document.getElementById("footerContainer");
    if (e.target.id === "history") {
      e.target.id = "home";
      e.target.src = home;
      showHistory("home");
      prodContainer.className = "historyContainer";
      headContainer.className = "historyHead";
      footerContainer.className = "historyFooter";
    } else {
      e.target.id = "history";
      e.target.src = history;
      showHistory("history");
      prodContainer.className = "prodContainer";
      headContainer.className = "head";
      footerContainer.className = "footer";
    }
  };
  const addClick = () => {
    const childDiv = document.getElementById("addList");
    childDiv.className === "addListHid"
      ? (childDiv.className = "addListShow")
      : (childDiv.className = "addListHid");
  };
  const handleAdding = (e) => {
    const amount = parseInt(e.target.value);
    pointsAdder(amount);
  };
  return (
    <header className="header">
      <section className="upBar">
        <img src={logo} alt="logo" id="headerLogo" />
        <div className="upBarInfo">
          <h3>{user.name}</h3>
          <div className="user">
            <p>{user.points}</p>
            <img src={coin} alt="coin icon" />
          </div>
          <img
            src={history}
            alt={"history logo"}
            onClick={handleClick}
            className="headerBtn"
            id="history"
          ></img>
          <div className="addBtn">
            <img
              src={addBtn}
              alt={"add button"}
              className="headerBtn"
              onClick={addClick}
            ></img>
            <div className="addListHid" id="addList">
              <div className="addHead">
                <h3>Choose the amount</h3>
                <img src={closeBtn} onClick={addClick}></img>
              </div>
              <ul>
                <li value="1000" onClick={handleAdding}>
                  1000
                </li>
                <li value="5000" onClick={handleAdding}>
                  5000
                </li>
                <li value="7500" onClick={handleAdding}>
                  7500
                </li>
              </ul>
            </div>
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
