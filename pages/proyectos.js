import "tailwindcss/tailwind.css";
import Barrita from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Cabezal from "../components/cabezal/cabezal";
import Titulo from "../components/title/title"
import Banner from "../components/banner/banner";

export default function Projects(){
    return (
      <div>
        <Cabezal title="BedRoom Studio - Proyectos" />
        <Barrita />
        <Banner />
        <Titulo text="Proyectos" />
        <div className="text-center grid grid-cols-1 py-6 md:grid-cols-2 gap-16 px-6 lg:px-12">
          <div>
            <img className="mx-auto lg:h-96" src="/Arango.png" />
            <h1 className="text-2xl font-black">Arango</h1>
          </div>
          <div>
            <img className="mx-auto lg:h-96" src="/Baul.png" />
            <h1 className="text-2xl font-black">Baul D' Recuerdos</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
}