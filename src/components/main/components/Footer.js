import PageButton from "./PageButton.js";
export default function Footer() {
  return (
    <section className="footer" id="footerContainer">
      <div className="footerInfo">
        <div id="counterDown">16 of 32 products</div>
        <PageButton />
      </div>
      <span></span>
    </section>
  );
}
