import "tailwindcss/tailwind.css";
import Barrita from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Cabezal from "../components/cabezal/cabezal";
import Titulo from "../components/title/title";
import Parrafo from "../components/parrafo/parrafo";
import Fila from "../components/fila/fila";
import Banner from "../components/banner/banner";

export default function Home() {
  return (
    <div>
      <Cabezal title="BedRoom Studio" />
      <Barrita />
      <Banner />
      <Titulo text="BedRoom Studio" />

      <Fila
        ParrafoTitle="Historia"
        ParrafoBody="BedRoom Studio es un estudio de grabación ubicado en Santa Catarina, N.L.
            liderado por Paulo Arambula. El estudio se construyó y abrió sus puertas en
            2020, y desde entonces se ha mantenido activo capturando y
            produciendo discos principalmente de géneros como
            metal e indie, siguiendo siempre nuestra
            filosofía de mantener la música lo más real y genuina posible."
        Image="/bateria.jpg"
      />

      <div className="grid grid-cols-1 py-6 md:grid-cols-2 gap-16 px-6 lg:px-12">
        <div>
          <Parrafo
            MainText="El Estudio"
            SecundaryText="Con la mejor calidad de equipo tanto análogo como digital, el cual
            actualizamos constantemente, logramos un buen sonido de manera
            rápida y a un precio razonable. En BedRoom Studio podrás encontrar marcas
            como Universal Audio, API, Shadow Hills, Daking, ALTEC, RCA, Rupert
            Neve, dbx, Empirical Labs, Tascam, SSL, Oktava, ADAM Audio, Yamaha,
            Audio Technica, Shure, Electro Voice, entre otros."
          />
          <p>
            El cuarto de estudio está profesionalmente tratado para aprovechar
            su acústica y que el sonido pueda ser registrado en él de la mejor
            manera. También contamos con un iso booth / cuarto seco, donde el
            eco y la reverberación es mínima para poder conseguir un sonido más
            claro y limpio, para tener la opción de tratarlo mejor en post
            producción.
          </p>
          <br />
          <p>
            Trabajamos para ofrecer a nuestros clientes los mejores
            instrumentos, todos ellos a su disposición. Tenemos una selección de
            baterías y tambores, platillos, tarolas, guitarras, bajos; y una
            variedad amplificadores de todo tipo para escoger lo mejor según el
            sonido que busquen capturar para su estilo musical, desde artículos
            vintage hasta modelos actuales. Contamos con una variedad de
            teclados y sintetizadores Korg, Mellotron, Roland, ARP, Rhodes así
            como sistemas modulares para poder experimentar y arreglar sus
            composiciones.
          </p>
          <br />
          <p>
            También contamos con una amplia gama de efectos, desde análogos a
            digitales, delays y echos análogos como Roland Space Echo, Maestreo
            Echoplex, Premier reverb, Thermionic Culture Vulture, Eventide H3000
            y una amplia selección de pedales desde Earthquaker, Death by Audio,
            Analogman, Moog, Shin Ei, Electroharmonix, MXR, Ibanez, Hologram
            Electronics, ZVEX, BOSS, entre otros.
          </p>
        </div>
        <img src="/synths.jpg"></img>
      </div>

      <Fila
        ParrafoTitle="Servicios"
        ParrafoBody="Nuestros servicios incluyen grabación, mezcla, master y producción.
        Todo de la manera más profesional, rápida y eficiente para lograr
        que nuestros clientes salgan satisfechos después de trabajar con
        nosotros."
        Image="/daw.jpg"
      />

      <br />

      <div>
        <h1 className="mb-6 font-bold text-3xl text-center leading-normal">
          <span>Síguenos en nuestras redes sociales</span>
          <hr className="mt-4 w-20 border-solid border-b-2 border-black m-auto" />
        </h1>
        <div className="flex items-center content-center justify-center">
          <a href="https://www.google.com" target="_blank">
            <img className="h-12" src="/facebook-icon.svg" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
