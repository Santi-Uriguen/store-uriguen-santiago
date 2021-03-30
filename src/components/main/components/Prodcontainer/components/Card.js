import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext.js";
import buyBlue from "../../../../../assets/icons/buy-blue.svg";
import coin from "../../../../../assets/icons/coin.svg";
export default function Card(props) {
  const { user } = useContext(UserContext);
  const handleHover =()=>{
    
  } 
  return (
    <div className="card">
      <div className="redeem">
        <div className="redeemable">
          {props.cost > user.points ? (
            <div className="noPoints">You need {props.cost - user.points}<img src={coin} alt="coin"></img></div>
          ) : (
            <img src={buyBlue} alt="buyBlue"></img>
          )}
        </div>
        <div class="hoverInfo">
          <div className="priceInfo">
            <h2>{props.cost}</h2>
            <img src={coin} alt="coin"></img>
          </div>
          <button>Redeem now</button>
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
