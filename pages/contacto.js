import "tailwindcss/tailwind.css";
import Barrita from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Cabezal from "../components/cabezal/cabezal";
import Titulo from "../components/title/title";
import Banner from "../components/banner/banner";

export default function Contact(){
    return (
      <div>
        <Cabezal title="BedRoom Studio - Contacto" />
        <Barrita />
        <Banner />
        <Titulo text="Contacto" />
        <div className="-my-5 text-center">
          <h1 className="py-5">
            Para cotizaciones / información / visitas favor de mandar correo o
            llamar
          </h1>
          <h4 className="py-5">
            paulo@bedroomstudio.com teléfono o whastapp 811237-4566
          </h4>
          <h1 className="py-5">BedRoom Studio</h1>
          <h4 className="py-5">
            Cerrada de Amapola Nte, 66360 Santa Catarina, Nuevo León, México
          </h4>
        </div>

        <div className="py-5">
          <iframe
            className="w-full h-80"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cerrada%20de%20Amapola%20Nte%20138+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <Footer />
      </div>
    );
}