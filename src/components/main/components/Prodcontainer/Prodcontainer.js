import { useContext } from "react";
import { ProdContext } from "../../../../context/ProductContext.jsx";
import Card from "./components/Card.js";
export default function Prodcontainer() {
  const { prod } = useContext(ProdContext);
  return (
    <section className="prodContainer">
      <div className="product-container" id="pageOne">
        {prod &&
          prod.map((prod, index) => {
            if (index <= 15) {
              return <Card {...prod} key={`${prod._id}-${index}`}/>;
            }
          })}
      </div>
      <div className="product-container hidden" id="pageTwo">
        {prod &&
          prod.map((prod, index) => {
            if (index > 15) {
              return <Card {...prod} key={`${prod._id}-${index}`}/>;
            }
          })}
      </div>
    </section>
  );
}
