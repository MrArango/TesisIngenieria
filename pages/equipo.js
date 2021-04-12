import "tailwindcss/tailwind.css";
import Barrita from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Cabezal from "../components/cabezal/cabezal";
import Fila from "../components/fila/fila";
import Titulo from "../components/title/title"
import Banner from "../components/banner/banner";

export default function Equipment(){
    return (
      <div>
        <Cabezal title="BedRoom Studio - Equipo de Grabación" />
        <Barrita />
        <Banner />
        <Titulo text="Equipo de grabación"/>
        <Fila
          ParrafoTitle="Muti-Track"
          ParrafoBody={[
            "- iMac 3.2GHz Quad-Core Intel Core i5",
            <br />,
            "- Universal Audio Apollo 16 ",
            <br />,
            "- Pro Tools HD Native 12 / Logic Pro X / Cockos Reaper ",
            <br />,
            "- Grabadora de cinta 1/4 Tascam 388 de 8 canales ",
          ]}
          Image="/mixer.jpg"
        />
         <Fila
          ParrafoTitle="Preamps y EQs"
          ParrafoBody={[
            "- Universal Audio LA-610 Channel Strip MKI",
            <br />,
            "- JHS Colour Box",
            <br />,
            "- (2) SSL 611EQ"
          ]}
          Image="/eq.jpg"
          toRight={true}
        />
        <Fila
          ParrafoTitle="Monitores"
          ParrafoBody={[
            "- ADAM AX7 con Sub 8",
            <br />,
            "- Yamaha NS-10",
          ]}
          Image="/monitores.jpg"
        />
        
        <Fila
          ParrafoTitle="Micrófonos"
          ParrafoBody={[
            "- Neumann u87ai",
            <br />,
            "- RCA 77 ",
            <br />,
            "- RCA 74",
            <br />,
            "- RCA Varacoustic",
            <br />,
            "- Altec 639A (birdcage)",
            <br />,
            "- (2) AEA 84 ribbon ",
            <br />,
            "- (2) Sennheiser 421",
            <br />,
            "- Sennheiser 441",
            <br />,
            "- Shure beta 52",
            <br />,
            "- (2) Shure 57",
            <br />,
            "- (2) Shure 58",
          ]}
          Image="/microfonos.jpg"
          toRight={true}
        />
        <Footer />
      </div>
    );
}