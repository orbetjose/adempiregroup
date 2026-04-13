import Image from "next/image";

export default function Marketing() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
  const itemsMarketing = [
    {
      imagen: "wp-content/uploads/2026/03/setup-inicial.png",
      title: "SET UP INICIAL",
      descripcion: [
        "Creación de las primeras 12 publicaciones del Feed de Instagram para creación de identidad Visual.",
        "Creación de plataformas de pago como META ADS, TIKTOK ADS Y GOOGLE ADS.",
      ],
    },
    {
      imagen: "wp-content/uploads/2026/03/branding.png",
      title: "BRANDING",
      descripcion: ["Creación de  logotipo, Plantilla de presentación, Papelería, Manual de identidad corporativa."],
    },
    {
      imagen: "wp-content/uploads/2026/03/paginas-web.png",
      title: "PÁGINAS WEB",
      descripcion: ["Diseño de Landing Pages, páginas web informativas, E-commerce y de presentación."],
    },
    {
      imagen: "wp-content/uploads/2026/03/administracion-web.png",
      title: "ADMINISTRACIÓN WEB",
      descripcion: [
        "Actualización, mantenimiento y configuración del sitio para aceptar la pauta. Subir ,cambiar o renovar el contenido informático como fotos.",
      ],
    },
    {
      imagen: "wp-content/uploads/2026/03/social-media.png",
      title: "SOCIAL MEDIA",
      descripcion: [
        "Gestión, administración, estrategia e implementación de perfiles sociales.",
        "Titktok - Youtube - Facebook - Instagram",
        "Creación de contenido gráfico / edición de video  y publicación de contenidos mensuales",
        "Estrategia de contenidos",
        "Estrategia de pauta optimizada.",
      ],
    },
    {
      imagen: "wp-content/uploads/2026/03/spotify.png",
      title: "SPOTIFY",
      descripcion: [
        "Optimizar y hacer crecer el perfil del artista en Spotify mediante estrategias de contenido, pauta digital y acciones de engagement, con el fin de aumentar streams, seguidores y posicionamiento en playlists.",
      ],
    },
    {
      imagen: "wp-content/uploads/2026/03/youtube.png",
      title: "YOUTUBE",
      descripcion: [
        "Auditoría y Optimización Inicial del Canal.",
        "Revisión del canal actual para identificar oportunidades de mejora.",
        "Actualización de elementos visuales (banner, logo y miniaturas personalizadas).",
        "Optimización de la descripción del canal, enlaces y palabras clave.",
        "Organización y diseño de listas de reproducción para mejorar la navegación y el tiempo de visualización.",
      ],
    },
    {
      imagen: "wp-content/uploads/2026/03/estrategia.png",
      title: "ESTRATEGIA EN GOOGLE ADWORDS - SEO Y ANALYTICS",
      descripcion: [
        "Investigación y Estrategia Inicial",
        "Estudio de mercado y competidores.",
        "Construcción del Buyer Persona (segmentación demográfica, geográfica, comportamental y psicográfica).",
        "Investigación de palabras clave (concordancia amplia, frase, exacta y negativas).",
      ],
    },
    {
      imagen: "wp-content/uploads/2026/03/configuracion.png",
      title: "CONFIGURACIÓN MONETIZACIÓN DE PERFILES",
      descripcion: ["Setup, configuración de los perfiles para aceptar monetización."],
    },
    {
      imagen: "wp-content/uploads/2026/03/recuperacion-cuentas.png",
      title: "RECUPERACIÓN DE CUENTAS",
      descripcion: [
        "Recuperación de cuentas perdidas, bloqueadas, inhabilitadas de Facebook, Tiktok, Instargam y Youtube.",
      ],
    },
  ];

  return (
    <main>
      <section>
        <div className="relative flex items-center h-[85vh]">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/fondo-marketing.png`}
            alt="Hero banner"
            className="h-[85vh] w-full object-cover object-left md:object-center absolute"
            width={1920}
            height={853}
          />
          <div className="mx-auto md:max-w-6xl 2xl:max-w-7xl text-white relative z-10 w-full font-regular text-center md:text-left px-6 md:px-0">
            <h1 className="font-black text-3xl md:text-6xl my-4 text-center uppercase tracking-widest">Marketing</h1>
          </div>
        </div>
      </section>
      <section className="bg-primary-gray py-10">
        <div className="md:max-w-6xl mx-auto px-6 md:px-0">
          <div className="grid md:grid-cols-2 gap-12">
            {itemsMarketing.map((item, index) => (
            <div className="bg-white rounded-3xl flex flex-col md:flex-row relative py-8 px-4 gap-4 items-center" key={index}>
              <div className="font-black absolute btn-primary-gradiant text-white rounded-full px-5 py-2 text-3xl -left-4 -top-4">
                <span>{index + 1}</span>
              </div>
              <Image
                src={currentDomain + item.imagen}
                alt={`${item.title}`}
                className="h-50 object-contain flex-1"
                width={798}
                height={662}
              />
              <div className="font-bold text-primary-blue text-xs space-y-2 flex-1">
                <span className="font-bold text-base block text-center md:text-left">{item.title}</span>
                {item.descripcion.map((paragraph, index) => (
                <p key={index} className="text-justify md:text-left">
                  {paragraph}
                </p>
                ))}
              </div>
              <div className="flex btn-primary-gradiant items-center rounded-full w-fit px-4 py-1 gap-4 absolute font-regular -bottom-4">
                <a
                  href="https://wa.me/17867866289"
                  target="_blank"
                  className="text-white">
                  Agenda tu asesoría
                </a>
                <img
                  src={`${currentDomain}wp-content/uploads/2026/03/arrow-button.png`}
                  className="h-3"
                  alt=""
                />
              </div>
            </div>

            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
