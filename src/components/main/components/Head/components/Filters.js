import { useContext } from "react";
import { ProdContext } from "../../../../../context/ProductContext.js";
import arrowUp from "../../../../../assets/icons/arrow-up-solid.svg";
import arrowDown from "../../../../../assets/icons/arrow-down-solid.svg";
import categoryIcon from "../../../../../assets/icons/category.svg";

export default function Filter() {
  const { filterFunction } = useContext(ProdContext);
  const sorter = (e) => {
    const filter = parseInt(e.target.value);
    filterFunction(filter);
  };
  return (
    <div className="filters">
      <button onClick={sorter} value={1} className="filter">
        <img src={categoryIcon} value={1} alt="category icon" />
        Category
      </button>
      <button className="filter" onClick={sorter} value={2}>
        <img src={arrowDown} alt="arrow down icon" /> Cost
      </button>
      <button className="filter" onClick={sorter} value={3}>
        <img src={arrowUp} alt="arrow up icon" /> Cost
      </button>
    </div>
  );
}
