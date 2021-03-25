export default function Card(props) {
  return (
    <div>
      <div>
        <img src={props.img.url}></img>
      </div>
      <div>
        <h4>{props.category}</h4>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
