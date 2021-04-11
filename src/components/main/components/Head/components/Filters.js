import { useContext } from "react";
import { ProdContext } from "../../../../../context/ProductContext.js";
export default function Filter() {
  const { prod, setProds, aver } = useContext(ProdContext);
  const sorter = (e) => {
    const filter = parseInt(e.target.value);
    let sortedProd = prod;
    switch (filter) {
      case 1:
        sortedProd = sortedProd.sort((a, b) => {
          if (a.category > b.category) {
            return 1;
          } else if (a.category < b.category) {
            return -1;
          } else {
            return 0;
          }
        });
        setProds(sortedProd);
                break;
      case 2:
        sortedProd = sortedProd.sort((a, b) => {
          if (a.cost > b.cost) {
            return 1;
          } else if (a.cost < b.cost) {
            return -1;
          } else {
            return 0;
          }
        });
        setProds(sortedProd);
        break;
      case 3:
        sortedProd = sortedProd.sort((a, b) => {
          if (a.cost < b.cost) {
            return 1;
          } else if (a.cost > b.cost) {
            return -1;
          } else {
            return 0;
          }
        });
        setProds(sortedProd);
        break;
      default:
        break;
    }
  };
  return (
    <div className="filters">
      <button value={1} onClick={sorter}>
        Category
      </button>
      <button value={2} className="fas fa-arrow-up" onClick={sorter}>
        Cost
      </button>
      <button value={3} className="fas fa-arrow-down" onClick={sorter}>
        Cost
      </button>
    </div>
  );
}
