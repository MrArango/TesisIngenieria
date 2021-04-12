import "tailwindcss/tailwind.css";
import Barrita from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Cabezal from "../components/cabezal/cabezal";
import Banner from "../components/banner/banner";
import Titulo from "../components/title/title";

export default function Photos()
{
  return (
    <div>
      <Cabezal title="BedRoom Studio - Fotos" />
      <Barrita />
      <Banner />
      <Titulo title="Fotos" />
      <Footer />
    </div>
  );
}