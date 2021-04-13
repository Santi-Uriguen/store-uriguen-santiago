import { useContext, useState } from "react";
import { UserContext } from "../../../../../context/UserContext.js";
import buyBlue from "../../../../../assets/icons/buy-blue.svg";
import buyWhite from "../../../../../assets/icons/buy-white.svg";
import coin from "../../../../../assets/icons/coin.svg";
import check from "../../../../../assets/icons/check.svg";
import fail from "../../../../../assets/icons/fail.svg";

export default function Card(props) {
  const [className, changeClass] = useState("hoverInfo");
  const [icon, changeIcon] = useState(buyBlue);
  const { user } = useContext(UserContext);
  const handleHover = () => {
    icon === buyBlue ? changeIcon(buyWhite) : changeIcon(buyBlue);
  };
  const handleClick = () => {
    let request = new XMLHttpRequest();
    request.open("POST", "https://coding-challenge-api.aerolab.co/redeem");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0ZTFjNDc2NmZiNTAwMjRhYTg3OTYiLCJpYXQiOjE2MTgyNzI3MDh9.d_OkCE--ik9X6lupRN-peFbHfc6wNKQKGeH10YknKFg"
    );
    const body = {
      productId: props._id,
    };
    request.send(JSON.stringify(body));
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (request.status === 200) {
          changeClass("successfullRedeem");
          setTimeout(() => {
            changeClass("hoverInfo");
          }, 2500);
        } else {
          changeClass("failRedeem");
          setTimeout(() => {
            changeClass("hoverInfo");
          }, 2500);
        }
      }
    };
  };
  const handleTouch = () => {
    let old = document.getElementsByClassName("hoverInfoMobile");
    if (old.length > 0) {
      console.log(old);
      for (let i = 0; i < old.length; i++) {
        old[i].className = "hoverInfo";
      }
    }
    className === "hoverInfoMobile"
      ? changeClass("hoverInfo")
      : changeClass("hoverInfoMobile");
  };
  return (
    <div
      className="card"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onTouchStart={handleTouch}
    >
      <div className="redeem">
        <div className="redeemable">
          {props.cost > user.points ? (
            <div className="noPoints">
              You need {props.cost - user.points}
              <img src={coin} alt="coin"></img>
            </div>
          ) : (
            <img src={icon} alt="buy icon"></img>
          )}
        </div>
        <div className={className} id="hoverInfo">
          <div className="priceInfo">
            <h2>{props.cost}</h2>
            <img src={coin} alt="coin"></img>
          </div>
          {props.cost > user.points ? (
            <span></span>
          ) : (
            <button onClick={handleClick}>Redeem now</button>
          )}
          <img
            src={check}
            alt="success check icon"
            className="successCheck"
            id="check"
          />
          <img src={fail} alt="failure icon" className="failCheck" id="fail" />
        </div>
      </div>
      <div>
        <img src={props.img.url} alt={props.name}></img>
      </div>
      <span></span>
      <div className="cardData">
        <p>{props.category}</p>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}
