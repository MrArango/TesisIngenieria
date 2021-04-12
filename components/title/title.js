import "tailwindcss/tailwind.css";

export default function Titulo(props) {
    return (
      <div className="py-10 px-6 mx-auto sm:py-8 ">
        <h1 className="text-4xl text-center font-bold leading-normal mb-6 lg:mb-10 xl:mb-10">
          <span>{props.text}</span>
          <hr className="mt-4 mb-0 w-20 border-solid border-b-2 border-black m-auto" />
        </h1>
      </div>
    );
}