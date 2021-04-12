import { useState } from "react";

export default function PageButton() {
  const [img, setImg] = useState();
  const handleClick = () => {
    const pageOne = document.getElementById("pageOne");
    const pageTwo = document.getElementById("pageTwo");
    const counterUp = document.getElementById("counterUp");
    const counterDown = document.getElementById("counterDown");
    const arrowImg = document.getElementsByClassName("pageButton");
    pageOne.classList.toggle("hidden");
    pageTwo.classList.toggle("hidden");
    img ? setImg(false) : setImg(true);
    img
      ? (counterUp.innerHTML = "16 of 32 products")
      : (counterUp.innerHTML = "32 of 32 products");
    img
      ? (counterDown.innerHTML = "16 of 32 products")
      : (counterDown.innerHTML = "32 of 32 products");
    if (img === true) {
      for (let i = 0; i < 2; i++) {
        arrowImg[i].className = "pageButton right";
      }
    } else {
      for (let i = 0; i < 2; i++) {
        arrowImg[i].className = "pageButton left";
      }
    }
  };

  return (
    <div onClick={handleClick} alt="arrow" className="pageButton right"></div>
  );
}
