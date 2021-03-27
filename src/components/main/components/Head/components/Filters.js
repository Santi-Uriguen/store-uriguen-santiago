import { useContext } from "react";
import { ProdContext } from "../../../../../context/ProductContext.jsx";
export default function Filter() {
  const { setProds } = useContext(ProdContext);
  const { prod } = useContext(ProdContext);
  const sorter = (e) => {
    const filter = parseInt(e.target.value);
    console.log(filter);
    let sortedProd = prod;
    console.log(sortedProd)
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
        console.log(1)
        console.log(sortedProd);
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
        console.log(2)
        console.log(sortedProd);
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
        console.log(3)
        console.log(sortedProd);
        setProds(sortedProd);
        break;
      default:
        console.log("default")
        console.log(sortedProd);
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
