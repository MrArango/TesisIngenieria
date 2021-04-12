import "tailwindcss/tailwind.css";

export default function Parrafo(props){
    return (
      <div>
        <h1 className="text-left text-2xl">{props.MainText}</h1>
        <br />
        <p className="text-base text-justify leading-normal">
          {props.SecundaryText}
        </p>
        <br />
      </div>
    );
}