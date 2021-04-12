import "tailwindcss/tailwind.css";
import Barrita from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Cabezal from "../components/cabezal/cabezal";
import Titulo from "../components/title/title";
import Fila from "../components/fila/fila";
import Banner from "../components/banner/banner";

export default function Instruments(){
    return (
      <div>
        <Cabezal title="BedRoom Studio - Instrumentos" />
        <Barrita />
        <Banner />
        <Titulo text="Instrumentos" />
        <Fila
          ParrafoTitle="Percusiones"
          ParrafoBody={[
            "- Kit Ludwig Classic Maple 22” 13” 16”",
            <br />,
            "- Kit Ludwig vintage Club Date 20” 13” 15”",
            <br />,
            "- Ludwig extra toms 12” 16”",
            <br />,
            "- Suprafonic Snare, Maple Classic Snare, 80s Ludwig Snare",
            <br />,
            "- Platillos Zildjian & Paiste (diferentes modelos) *lo ideal es que cada quien lleve sus platillos",
            <br />,
            "- Varios percusiones (bongoes, djembe, shakers, maracas, etc)",
            <br />,
            "- Roland triggers (2) RT-30H (1) RT30K ",
          ]}
          Image="/percusiones.jpg"
        />
        <Fila
          ParrafoTitle="Guitarras"
          ParrafoBody={[
            "- Fender Mustang 67",
            <br />,
            "- Fender Jaguar vintage series",
            <br />,
            "- Fender Jazzmaster Thurston Moore",
            <br />,
            "- Fender Pro Jazzmaster ",
            <br />,
            "- Fender Telecaster 60 Anniversary ",
            <br />,
            "- Gibson Les Paul Custom ",
            <br />,
            "- Gibson SG Standard P90s",
            <br />,
            "- Gibson Flying V (Lace pickups)",
            <br />,
            "- Guild SF-4",
            <br />,
            "- Vox Phantom",
            <br />,
            "- Vox Teardrop 12 string",
            <br />,
            "- Danelectro 59 12 string",
            <br />,
            "- White whale / Electrical guitar Company Aluminum neck Jazzblaster",
            <br />,
            "- Danelectro Baby Sitar",
            <br />,
            "- Dobro Resonator Guitar",
            <br />,
            "- Gibson L-00 Studio Acoustic ",
            <br />,
            "- Fender Acoustic Nylon String ",
          ]}
          Image="/guitarras.jpg"
          toRight={true}
        />
        <Fila
          ParrafoTitle="Bajos"
          ParrafoBody={[
            "- Rickenbacker 4001",
            <br />,
            "- Fender Precision Bass USA",
            <br />,
            "- Gibson SG short scale ",
            <br />,
            "- Squier Bass IV ",
          ]}
          Image="/bajos.jpg"
        />
        <Fila
          ParrafoTitle="Amplificadores"
          ParrafoBody={[
            "- Marshall 1959 Plexi ",
            <br />,
            "- Fender Twin Reverb",
            <br />,
            "- Fender Vibro Champ",
            <br />,
            "- Supro Trojan S6616",
            <br />,
            "- Orange Rockerverb 100",
            <br />,
            "- DIY Fender F51",
            <br />,
            "- Vox AC 15",
            <br />,
            "- Vox V1143 Beatle",
            <br />,
            "- Sunn Concert Lead",
            <br />,
            "- Sunn 300t",
            <br />,
            "- Sunn Concert Lead",
            <br />,
            "- Peavy Mark IV Series 400BH",
            <br />,
            "- Gretsch Valco 6170 Pro Bass",
            <br />,
            "- Darkglass Electronics Microtubes 900 V2",
          ]}
          Image="/amplificadores.jpg"
          toRight={true}
        />
        <Fila
          ParrafoTitle="Teclados y sintetizadores"
          ParrafoBody={[
            "- Fender Rhodes Mark II",
            <br />,
            "- Acetone Top-5 Organ ",
            <br />,
            "- Mellotron M4000D ",
            <br />,
            "- Korg Ms20 / Korg SQ-10 ",
            <br />,
            "- Korg Polysix ",
            <br />,
            "- ARP Odyssey ",
            <br />,
            "- Jasper Synth ",
            <br />,
            "- Roland RS-09 ",
            <br />,
            "- Roland XP-30 ",
            <br />,
            "- Moog Sub37  ",
            <br />,
            "- AKAI USB controller ",
            <br />,
            "- Behringer Vc340 vocoder ",
            <br />,
            "- Behringer RD-9 drum machine ",
            <br />,
            "- Varios sistemas modulares con módulos de diferentes compañías ",
          ]}
          Image="/sintetizadores.jpg"
        />
        <Fila
          ParrafoTitle="Pedales y Efectos"
          ParrafoBody="- Tenemos de 40 a 50 pedales de diferentes marcas (overdrives, fuzz, distorsion, delays, reverb, phaser, flangers, synths, chorus, octavadores, pitch, filtros, ringmodulator, etc)"
          Image="/pedales.jpg"
          toRight={true}
        />
        <Footer />
      </div>
    );
}