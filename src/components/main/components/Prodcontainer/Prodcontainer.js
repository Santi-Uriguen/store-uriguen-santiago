import { useContext } from "react";
import { ProdContext } from "../../../../context/ProductContext.js";
import Card from "./components/Card.js";
export default function Prodcontainer() {
  let { prod } = useContext(ProdContext);
  return (
    <section className="prodContainer" id="prodContainer">
      <div className="product-container" id="pageOne">
        {prod &&
          prod.map((prod, index) => {
            if (index <= 15) {
              return <Card {...prod} key={`${prod._id}-${index}`} />;
            } else return "";
          })}
      </div>
      <div className="product-container hidden" id="pageTwo">
        {prod &&
          prod.map((prod, index) => {
            if (index > 15) {
              return <Card {...prod} key={`${prod._id}-${index}`} />;
            } else return "";
          })}
      </div>
    </section>
  );
}
