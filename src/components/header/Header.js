import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import portada from "../../assets/header-x1.png";
export default function Header() {
  return (
    <header className="header">
      <section className="upBar">
        <img src={logo} alt="logo" id="headerLogo" />
        <div className="upBarInfo">
          <h3>SantiUriguen</h3>
          <div>
            <p>2500</p>
            <img src={coin} alt="" />
          </div>
        </div>
      </section>
      <section className="banner">
        <img src={portada} alt="" />
        <h1>Electrónica</h1>
      </section>
    </header>
  );
}
