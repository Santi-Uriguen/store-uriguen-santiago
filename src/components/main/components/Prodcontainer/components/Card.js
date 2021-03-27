export default function Card(props) {
  return (
    <div className="card">
      <div>
        <img src={props.img.url}></img>
      </div>
      <span></span>
      <div className="cardData">
        <p>{props.category}</p>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}

