import PageButton from "./PageButton.js"
export default function Head() {
  return (
    <section className="head">
      <div id="counterUp">16 of 32 products</div>
      <span></span>
      <div className="filters">
        <h3>Sort by:</h3>
        <div className="filt">Filtro 1</div>
        <div className="filt">Filtro 2</div>
        <div className="filt">Filtro 3</div>
      </div>
      <PageButton/>
    </section>
  );
}
