import Parrafo from "../parrafo/parrafo";

export default function Fila(props) {
  if(!props.toRight){
      return<div className="grid grid-cols-1 py-6 md:grid-cols-2 gap-16 px-6 lg:px-12">
      <div>
        <img src={props.Image}></img>
      </div>
      <Parrafo MainText={props.ParrafoTitle} SecundaryText={props.ParrafoBody} />
    </div>;
  }
  return (
    <div className="grid grid-cols-1 py-6 md:grid-cols-2 gap-16 px-6 lg:px-12">
      <Parrafo MainText={props.ParrafoTitle} SecundaryText={props.ParrafoBody} />
      <div>
        <img src={props.Image}></img>
      </div>
    </div>
  );
}