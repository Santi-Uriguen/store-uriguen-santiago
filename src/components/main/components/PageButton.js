import { useState } from "react";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import arrowLeft from "../../../assets/icons/arrow-left.svg";

export default function PageButton() {
  const [img, setImg] = useState();
  const handleClick = () => {
    const pageOne = document.getElementById("pageOne");
    const pageTwo = document.getElementById("pageTwo");
    const counterUp = document.getElementById("counterUp");
    const counterDown = document.getElementById("counterDown");
    pageOne.classList.toggle("hidden");
    pageTwo.classList.toggle("hidden");
    img ? setImg(false) : setImg(true);
    img ? counterUp.innerHTML="16 of 32 products":counterUp.innerHTML="32 of 32 products"
    img ? counterDown.innerHTML="16 of 32 products":counterDown.innerHTML="32 of 32 products"
  };
  return (
    <img
      src={img ? arrowLeft :arrowRight}
      onClick={handleClick}
      className="pageButton"
    ></img>
  );
}
