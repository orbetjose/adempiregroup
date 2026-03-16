"use client";

import Image from "next/image";
import ChevronDown from "./components/chevronDown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
  const itemsCategories = [
    { title: "Marketing", slug: "/servicios/marketing" },
    { title: "Asesoría" },
    { title: "Managment de talentos" },
    { title: "Cine y TV" },
    { title: "Música", slug: "/servicios/musica" },
  ];
  const itemsSolutions = [
    "Gestión de talento y representación (“Talent Manager”).",
    "Representación y gestión integral de artistas e influencers para Cine & TV.",
    "Gestión y promoción en el ámbito musical.",
    "Estrategias de marketing digital e integral.",
    "Asesoría especializada para influencers.",
    "Organización y coordinación de eventos (“Event Planner”).",
  ];
  const itemsBrands = [
    "wp-content/uploads/2026/03/walmart-brand.png",
    "wp-content/uploads/2026/03/universal-brand.png",
    "wp-content/uploads/2026/03/warner-brand.png",
    "wp-content/uploads/2026/03/sony-brand.png",
    "wp-content/uploads/2026/03/walmart-brand.png",
  ];
  const itemsTalents = [
    {
      imagen: "wp-content/uploads/2026/03/beto.png",
      nombre: "Beto Villa",
    },
    {
      imagen: "wp-content/uploads/2026/03/brayan.png",
      nombre: "Brayan El Joker",
    },
    {
      imagen: "wp-content/uploads/2026/03/frangely.png",
      nombre: "Frangely Materan",
    },
    {
      imagen: "wp-content/uploads/2026/03/oscar.png",
      nombre: "Oscar el Teacher",
    },
    {
      imagen: "wp-content/uploads/2026/03/imaray.png",
      nombre: "Imaray Ulloa",
    },

    {
      imagen: "wp-content/uploads/2026/03/beta.png",
      nombre: "Beta Mejía",
    },
    {
      imagen: "wp-content/uploads/2026/03/pollito.png",
      nombre: "Pollito Tropical",
    },
    {
      imagen: "wp-content/uploads/2026/03/judith.png",
      nombre: "Judith González",
    },
    {
      imagen: "wp-content/uploads/2026/03/ariel.png",
      nombre: "Ariel Ramos",
    },
    {
      imagen: "wp-content/uploads/2026/03/arlen.png",
      nombre: "Arlen Villar",
    },
  ];
  const itemsServices = [
    {
      imagen: "wp-content/uploads/2026/03/ico-talent.png",
      titulo: "Talent Manager",
      descripcion:
        "En A&D Empire Group, gestionamos la carrera de talentos con una visión estratégica y desarrollo personalizado, conectándolos con oportunidades clave en entretenimiento, publicidad y eventos.",
    },
    {
      imagen: "wp-content/uploads/2026/03/ico-marketing.png",
      titulo: "Marketing",
      descripcion:
        "Brindamos soluciones de marketing integrales y creativas, incluyendo campañas digitales, branding, posicionamiento de marca y activaciones con impacto real.",
    },
    {
      imagen: "wp-content/uploads/2026/03/ico-cine.png",
      titulo: "Cine y TV",
      descripcion:
        "En A&D Empire Group conectamos talentos e influencers con oportunidades reales en cine y televisión, asegurando su visibilidad y proyección en campañas, producciones y proyectos audiovisuales.",
    },
    {
      imagen: "wp-content/uploads/2026/03/ico-asesoria.png",
      titulo: "Asesoría de influencers",
      descripcion:
        "Asesoramos influencers en estrategia de contenido, branding personal, negociación de alianzas, crecimiento de audiencia y activaciones de marca efectivas.",
    },
    {
      imagen: "wp-content/uploads/2026/03/ico-musica.png",
      titulo: "Música",
      descripcion:
        "A&D Empire Group impulsa talentos musicales con desarrollo artístico, producción, promoción y posicionamiento en medios digitales y espacios en vivo.",
    },
    {
      imagen: "wp-content/uploads/2026/03/ico-planner.png",
      titulo: "Event Planner",
      descripcion:
        "Organizamos eventos desde la conceptualización hasta la ejecución total: lanzamientos, conciertos, premieres, festivales y eventos corporativos, con atención impecable en cada detalle.",
    },
  ];

  return (
    <main className="">
      <section>
        <div className="relative flex items-center h-[85vh]">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/hero.png`}
            alt="Hero banner"
            className="h-[85vh] w-full object-cover object-left md:object-center absolute"
            width={1920}
            height={853}
          />
          <div className="mx-auto md:max-w-6xl 2xl:max-w-7xl text-white relative z-10 w-full font-regular text-center md:text-left px-6 md:px-0">
            <span className="bg-primary-pink rounded-xl px-2 py-1">¿Quiénes somos?</span>
            <h1 className="font-black text-3xl md:text-5xl my-4">A & D Empire Group: </h1>
            <div className="md:max-w-lg">
              <p className="mb-2 text-justify">
                Somos una agencia integral de entretenimiento y marketing con sede en Miami Florida.{" "}
              </p>
              <p className="text-justify">
                Nos especializamos en una gama de servicios que abarca desde la industria del entretenimiento hasta el
                desarrollo de estrategias de marketing para influencers, empresas y producciones audiovisuales.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-4 pb-8 relative">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/fondo-lista.png`}
            alt="Fondo lista"
            className="absolute top-0 h-full w-full object-cover"
            width={1924}
            height={113}
          />
          <div className="flex md:flex-row md:justify-evenly md:max-w-4xl mx-auto text-white font-regular text-lg flex-col gap-2 md:gap-0 z-1 relative">
            {itemsCategories.map((item, index) => (
              <a
                href={item.slug}
                key={index}
                className="text-center hover:underline">
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="servicios">
        <ChevronDown />
        <div className="pt-12 pb-16 text-center relative">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/fondo-hacemos.png`}
            alt="Fondo que hacemos"
            className="absolute top-0 h-full w-full object-cover"
            width={1920}
            height={834}
          />
          <div className="z-1 relative ">
            <h2 className="font-black text-white text-3xl md:text-5xl mb-6">¿Qué hacemos?</h2>
            <span className="border border-white rounded-full font-regular text-white px-4 py-1 text-lg">
              Ofrecemos soluciones completas en:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:max-w-4xl mx-auto mt-12 font-bold text-primary-blue px-6 md:px-0">
              {itemsSolutions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white flex items-center gap-4 rounded-full py-1 px-8">
                  <span className="text-left leading-5">{item}</span>{" "}
                  <Image
                    src={`${currentDomain}wp-content/uploads/2026/03/chevron-right.png`}
                    alt="Flecha hacia la derecha"
                    className="h-6 object-contain"
                    width={45}
                    height={81}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <ChevronDown />
      </section>
      <section className="py-12 bg-primary-gray">
        <h3 className="text-3xl md:text-5xl text-center font-black text-primary-blue mb-8">Nuestro valor agregado</h3>
        <div className="md:max-w-4xl mx-auto px-6 md:px-0 flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-evenly">
          <div className="md:w-1/2 text-primary-blue font-regular">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <img
                  className="inline-block h-6"
                  src={`${currentDomain}wp-content/uploads/2026/03/list-valor.png`}
                  alt=""
                />
                <div>
                  <p className="leading-5">
                    <span className="font-bold-italic">Enfoque personalizado:</span> cada proyecto es atendido con una
                    estrategia única que potencia su identidad.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="inline-block h-6"
                  src={`${currentDomain}wp-content/uploads/2026/03/list-valor.png`}
                  alt=""
                />
                <div>
                  <p className="leading-5">
                    <span className="font-bold-italic">Red de contactos clave</span> en entretenimiento, medios e
                    influencers.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="inline-block h-6"
                  src={`${currentDomain}wp-content/uploads/2026/03/list-valor.png`}
                  alt=""
                />
                <div>
                  <p className="leading-5">
                    <span className="font-bold-italic">Alto nivel de profesionalismo</span>, creatividad y
                    adaptabilidad.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="inline-block h-6"
                  src={`${currentDomain}wp-content/uploads/2026/03/list-valor.png`}
                  alt=""
                />
                <div>
                  <p className="leading-5">
                    <span className="font-bold-italic">Enfoque 360°:</span> desde la idea, producción y contenido hasta
                    la ejecución y promoción eficaz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <Image
              src={`${currentDomain}wp-content/uploads/2026/03/imagen-valor-agregado.png`}
              alt="Imagen valor agregado"
              className="md:h-80 object-contain"
              width={1179}
              height={891}
            />
          </div>
        </div>
      </section>
      <ChevronDown />
      <section className="bg-primary-gray" id="bio">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:max-w-5xl mx-auto relative px-4 md:px-0 gap-4 md:gap-0">
          <div className="md:w-[45%]">
            <Image
              src={`${currentDomain}wp-content/uploads/2026/03/imagen-dyanna.png`}
              alt="Imagen Dyanna Rosemary"
              className="h-64 md:h-90 object-contain relative z-1"
              width={1384}
              height={1037}
            />
            <Image
              src={`${currentDomain}wp-content/uploads/2026/03/background-blue.png`}
              alt="Fondo azul"
              className="absolute -left-200 top-1/2 -translate-y-1/2 h-30"
              width={1018}
              height={393}
            />
          </div>
          <div className="text-primary-blue font-regular md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-black text-2xl">Dyanna Rosemary</span>
              <div className="flex gap-3">
                <img
                  className="h-6"
                  src={`${currentDomain}wp-content/uploads/2026/03/instagram-ico.png`}
                  alt="Instagram icono"
                />
                <img
                  className="h-6"
                  src={`${currentDomain}wp-content/uploads/2026/03/facebook-ico.png`}
                  alt="Facebook icono"
                />
                <img
                  className="h-6"
                  src={`${currentDomain}wp-content/uploads/2026/03/wp-ico.png`}
                  alt="Whatsapp icono"
                />
              </div>
            </div>
            <p className="text-justify pb-2">
              Fundadora, directora y motor creativo detrás de A & D Empire Group. Con una trayectoria en representación
              artística, marketing y relaciones públicas, combina su experiencia en el sector del entretenimiento con
              una visión estratégica innovadora.
            </p>
            <p className="text-justify pb-2">
              Como <span className="font-bold-italic">Manager & Booking Agent</span>, ha liderado procesos de
              negociación y representación para talentos emergentes y consolidados. Además, su experiencia en Marketing
              y PR ha sido fundamental para posicionar tanto a influencers como a marcas ante audiencias clave.
            </p>
            <div className="flex btn-primary-gradiant items-center rounded-full w-fit px-4 py-1 gap-4">
              <a
                href="#"
                className="text-white">
                Agenda tu asesoría aquí
              </a>
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/arrow-button.png`}
                className="h-3"
                alt="Flecha derecha boton"
              />
            </div>
          </div>
        </div>
      </section>
      <ChevronDown />
      <section className="py-12 bg-primary-gray" >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:max-w-5xl mx-auto gap-x-16 gap-y-8 px-6 md:px-0">
          {itemsServices.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-4">
              <Image
                src={`${currentDomain}${item.imagen}`}
                alt={item.titulo}
                className="h-18 object-contain"
                width={233}
                height={232}
              />
              <div>
                <span className="text-primary-blue font-black italic text-xl">{item.titulo}</span>
                <p className="text-justify font-regular py-2 leading-5">{item.descripcion}</p>
                <div className="flex items-center gap-2 gradient-border-image px-4">
                  <a
                    href="#"
                    className="font-regular">
                    Más info
                  </a>
                  <img
                    className="h-2"
                    src={`${currentDomain}wp-content/uploads/2026/03/arrow-blue.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative flex flex-col justify-center py-12">
        <h2 className="relative z-1 font-black text-center text-3xl pb-8 text-white">Talentos</h2>
        <Image
          src={`${currentDomain}wp-content/uploads/2026/03/fondo-talentos.png`}
          alt="Fondo talentos"
          className="absolute object-cover h-full "
          width={1920}
          height={1102}
        />
        <div className="grid grid-cols-2 md:grid-cols-5 relative z-1 md:max-w-5xl mx-auto gap-y-12">
          {itemsTalents.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2">
              <Image
                src={currentDomain + item.imagen}
                alt={`Foto ${item.nombre}`}
                className="h-30 md:h-35 object-contain"
                width={510}
                height={510}
              />
              <span className="font-black text-white">{item.nombre}</span>
            </div>
          ))}
        </div>
      </section>
      <ChevronDown />
      <section className="bg-primary-gray py-12 px-6 md:px-0">
        <div className="btn-primary-gradiant px-4 py-1 w-fit rounded-full mx-auto">
          <h4 className="font-black text-white text-xl text-center md:text-2xl ">
            Empresas con las que hemos trabajado
          </h4>
        </div>
        <div className="md:max-w-4xl mx-auto mt-14 carousel-marcas relative">
          <button className="swiper-button-prev swiper-button-prev-marcas">
            <img
              src={`${currentDomain}wp-content/uploads/2026/03/arrow-left.png`}
              alt=""
            />
          </button>
          <button className="swiper-button-next swiper-button-next-marcas">
            <img
              src={`${currentDomain}wp-content/uploads/2026/03/arrow-right.png`}
              alt=""
            />
          </button>
          <Swiper
            watchOverflow={false}
            loop={false}
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-marcas",
              nextEl: ".swiper-button-next-marcas",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            className="">
            {itemsBrands.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={currentDomain + item}
                  alt="Marcas"
                  className="max-w-45 max-h-20 object-contain mx-auto"
                  width={703}
                  height={298}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
