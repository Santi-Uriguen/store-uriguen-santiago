import PageButton from "../PageButton.js";
import Filters from "./components/Filters.js";
export default function Head() {
  return (
    <section className="head" id="headContainer">
      <h2>Redeem history</h2>
      <div id="counterUp">16 of 32 products</div>
      <span></span>
      <Filters />
      <PageButton />
    </section>
  );
}
