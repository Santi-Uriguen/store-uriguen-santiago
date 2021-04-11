import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext.js";
import buyBlue from "../../../../../assets/icons/buy-blue.svg";
import coin from "../../../../../assets/icons/coin.svg";

export default function Card(props) {
  const { user } = useContext(UserContext);
  const handleClick = () => {
    let request = new XMLHttpRequest();
    request.open("POST", "https://coding-challenge-api.aerolab.co/redeem");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMzUxMWEyNGI1NzAwMjBjNmM3MTgiLCJpYXQiOjE2MTcxMTQzODV9.yyna3Evs1zqxQ6uU9w9PjmdvhRLgtoOpvdkcmjajG-U"
    );
    const body = {
      productId: props._id,
    };
    request.send(JSON.stringify(body));
  };
  return (
    <div className="card">
      <div className="redeem">
        <div className="redeemable">
          {props.cost > user.points ? (
            <div className="noPoints">
              You need {props.cost - user.points}
              <img src={coin} alt="coin"></img>
            </div>
          ) : (
            <img src={buyBlue} alt="buyBlue"></img>
          )}
        </div>
        <div className="hoverInfo">
          <div className="priceInfo">
            <h2>{props.cost}</h2>
            <img src={coin} alt="coin"></img>
          </div>
          <button onClick={handleClick}>Redeem now</button>
        </div>
      </div>
      <div>
        <img src={props.img.url}></img>
      </div>
      <span></span>
      <div className="cardData">
        <p>{props.category}</p>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}
