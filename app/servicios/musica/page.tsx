import Image from "next/image";

export default function page() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;

  return (
    <main>
      <section>
        <div className="relative flex items-center h-[85vh]">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/fondo-musica.png`}
            alt="Hero banner"
            className="h-[85vh] w-full object-cover object-left md:object-center absolute"
            width={1920}
            height={853}
          />
          <div className="mx-auto md:max-w-6xl 2xl:max-w-7xl text-white relative z-10 w-full font-regular text-center md:text-left px-6 md:px-0">
            <h1 className="font-black text-3xl md:text-6xl my-4 text-center uppercase tracking-widest">Música</h1>
          </div>
        </div>
      </section>
      <section className="bg-primary-blue py-10">
        <div className="md:max-w-3xl mx-auto px-6 md:px-0 space-y-24">
          <div className="bg-white p-8 md:py-12 md:px-16 card-rounded flex relative">
            <div className="btn-primary-gradiant absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-auto md:left-32 text-white px-8 py-1 rounded-xl">
              <span className="font-black uppercase text-2xl">Starter</span>
            </div>
            <div className="md:w-1/4">
              <Image
                src={`${currentDomain}wp-content/uploads/2026/03/Starter.png`}
                alt="Plan musica starter"
                className="md:h-70 w-fit object-contain absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block"
                width={986}
                height={986}
              />
            </div>
            <div className="md:w-3/4">
              <p className="font-regular text-lg mb-4">
                Ideal para eventos pequeños o detalles especiales. <br />
                <span className="font-bold">Hasta 20 personas</span>.
              </p>
              <p className="font-regular">• 1 hora de presentación con cantante solista </p>
              <p className="font-regular mb-4">• Sonido profesional incluido</p>
              <span className="md:bg-primary-blue md:text-white font-bold-italic md:px-6 py-2 rounded-full block w-fit text-sm md:text-base">
                Perfecto para sorprender a alguien especial en casa, restaurante o espacios íntimos.
              </span>
            </div>
            <div className="flex btn-primary-gradiant items-center rounded-full w-67.5 md:w-fit px-4 py-1 gap-4  absolute text-white font-regular left-1/2 -translate-x-1/2 -bottom-4">
              <a href="">Agenda tu asesoría aquí</a>
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/arrow-button.png`}
                className="h-3"
                alt="Flecha derecha boton"
              />
            </div>
          </div>
          <div className="bg-white p-8 md:py-12 md:px-16 card-rounded flex relative">
            <div className="btn-primary-gradiant absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-auto md:left-32 text-white px-8 py-1 rounded-xl">
              <span className="font-black uppercase text-2xl">ADVANCED</span>
            </div>
            <div className="md:w-1/4">
              <Image
                src={`${currentDomain}wp-content/uploads/2026/03/Advanced.png`}
                alt="Plan musica advanced"
                className="md:h-70 w-fit object-contain absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block"
                width={986}
                height={986}
              />
            </div>
            <div className="md:w-3/4">
              <p className="font-regular text-lg mb-4">
                Todos los artistas incluyen sonido básico para <br />
                <span className="font-bold">hasta 50 invitados</span>.
              </p>
              <p className="font-regular">• Cantante solista</p>
              <p className="font-regular">• 2 sets de 45 minutos + música ambiente entre sets</p>
              <p className="font-regular">• Sonido profesional incluido</p>
              <p className="font-regular mb-4">• Duración total del servicio: 3 horas</p>
              <span className="md:bg-primary-blue md:text-white font-bold-italic md:px-6 py-2 rounded-full block w-fit text-sm md:text-base">
                ¡El paquete más reservado! Perfecto para fiestas familiares o celebraciones privadas.
              </span>
            </div>
            <div className="flex btn-primary-gradiant items-center rounded-full w-67.5 md:w-fit px-4 py-1 gap-4  absolute text-white font-regular left-1/2 -translate-x-1/2 -bottom-4">
              <a href="">Agenda tu asesoría aquí</a>
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/arrow-button.png`}
                className="h-3"
                alt="Flecha derecha boton"
              />
            </div>
          </div>
          <div className="bg-white p-8 md:py-12 md:px-16 card-rounded flex relative">
            <div className="btn-primary-gradiant absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-auto md:left-32 text-white px-8 py-1 rounded-xl w-full md:w-auto">
              <span className="font-black uppercase text-xl md:text-2xl">MÚSICA EN VIVO Y DJ ́S</span>
            </div>
            <div className="md:w-1/4">
              <Image
                src={`${currentDomain}wp-content/uploads/2026/03/Musica-en-vivo.png`}
                alt="Plan musica musica en vivo y dj"
                className="md:h-70 w-fit object-contain absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block"
                width={986}
                height={986}
              />
            </div>
            <div className="md:w-3/4">
              <p className="font-regular text-lg mb-4">
                <span className="font-bold">Músicos Especializados</span>.
              </p>
              <p className="font-regular">• Saxofonistas</p>
              <p className="font-regular">• Violinistas</p>
              <p className="font-regular">• Pianistas</p>
              <p className="font-regular mb-4">• Tenores</p>
              <span className="md:bg-primary-blue md:text-white font-bold-italic md:px-6 py-2 rounded-full block w-fit text-sm md:text-base">
                Elegancia y distinción para bodas, ceremonias y eventos exclusivos.
              </span>
            </div>
            <div className="flex btn-primary-gradiant items-center rounded-full w-67.5 md:w-fit px-4 py-1 gap-4  absolute text-white font-regular left-1/2 -translate-x-1/2 -bottom-4">
              <a href="">Agenda tu asesoría aquí</a>
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/arrow-button.png`}
                className="h-3"
                alt="Flecha derecha boton"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
