import "tailwindcss/tailwind.css";
import Barrita from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Cabezal from "../components/cabezal/cabezal";
import Titulo from "../components/title/title";
import Parrafo from "../components/parrafo/parrafo";
import Banner from "../components/banner/banner";

export default function InfoService(){
    return (
      <div>
        <Cabezal title="BedRoom Studio - Servicios" />
        <Barrita />
        <Banner />
        <Titulo text="Servicios" />
        <div className="grid grid-cols-1 py-6 md:grid-cols-2 gap-4 px-6 lg:px-12">
          <div>
            <img src="/servicios.jpg"></img>
          </div>
          <div>
            <Parrafo
              MainText="Grabación"
              SecundaryText="Contamos con equipo de grabación de la más alta calidad, desde equipo vintage hasta equipo moderno. Podemos hacer grabaciones directo al DAW así como utilizar nuestra tascam 388 y grabar análogo en cinta ¼. Todos nuestros instrumentos están disponibles para poder llegar a los sonidos más únicos y extraordinarios que puedas tener en tu mente. Baterías, guitarras, sintetizadores, teclados, pedales y amplificadores."
            />
            <Parrafo
              MainText="Mixing"
              SecundaryText="Para mezclar usamos pro tools, contamos con una gran variedad de
              plug-ins y outboard gear como compresores, efectos
              digitales/análogos para poder obtener el sonido al que quieres
              llegar."
            />
            <Parrafo
              MainText="Masterización"
              SecundaryText="Contamos con una combinación de equipo análogo y digital que
              utilizamos para equilibrar los elementos sonoros de una mezcla y
              optimizar la reproducción en todos los sistemas y formatos
              (servicios de streaming, CD's, tapes o viniyl)."
            />
            <Parrafo
              MainText="Producción"
              SecundaryText="Constantemente estamos haciendo música y estamos al tanto de
              diferentes formas de composición. Nos acomodamos a tus
              necesidades, si tienes un proyecto solista y/o solo cantas y tocas
              guitarra o piano nosotros te podemos ayudar con la instrumentación
              (baterías / bajos / pianos / arreglos en general) para lograr lo
              que tienes en mente."
            />
            <Parrafo
              MainText="Otros ingenieros y productores son bienvenidosucción"
              SecundaryText="Si eres ingeniero o productor y tienes un proyecto eres bienvenido, te podemos guiar para que conozcas el workflow del estudio y te sientas libre para experimentar y producir el proyecto que gustes."
            />
            <Parrafo
              MainText="Grabación en vivo con o sin video"
              SecundaryText="Contamos con servicios profesionales de fotografía y video para poder capturar tu proyecto en vivo. También estamos abiertos a recibir servicios externos que se encarguen de ello. "
            />
            <Parrafo
              MainText="Beats"
              SecundaryText="No contamos con pistas pre-hechas, pero si te interesa hacer beats para tu canción contamos con equipo análogo, diferentes cajas de ritmos, así como varios sistemas modulares y sintetizadores para crear tus pistas.  "
            />
            <Parrafo
              MainText="Grabación a distancia"
              SecundaryText="Si trabajas en tu home studio y necesitas ayuda con grabación de baterías, bajos, arreglos de guitarra, teclados, cuerdas, etc y no quieres salir de tu casa lo podemos hacer por ti. Nos puedes enviar tus archivos con una explicación y una guía para saber qué es lo que estás buscando, nosotros lo grabamos y te mandamos los archivos de regreso."
            />
            <Parrafo
              MainText="Jingles, música para comerciales, cortometrajes y cine"
              SecundaryText="Musicalizamos tus proyectos visuales siempre tomando en cuenta la esencia de lo que se desea plasmar y lo que se quiere transmitir."
            />
            <Parrafo
              MainText="Afinación, alineación y post producción de voces"
              SecundaryText="Nos puedes mandar los stems de voces y nosotros los procesamos para que tengan un mejor espacio y sonido en tu mezcla. Desde afinación, tratamientos y efectos."
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}