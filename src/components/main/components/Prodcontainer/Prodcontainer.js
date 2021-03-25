import { useEffect, useContext } from "react";
import { ProdContext } from "../../../../context/ProductContext.jsx";
import Card from "./components/Card.js";
export default function Prodcontainer() {
  const {prod} = useContext(ProdContext);
  return (
    <section className="prodContainer">
      <div className="product-container">
        {prod &&
          prod.map((prod, index) => {
            console.log(prod);
            return <Card {...prod} key={`${prod._id}-${index}`} />;
          })}
      </div>
    </section>
  );
}
