import Image from "next/image";

export default function Footer() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
  return (
    <footer>
      <section className="bg-primary-blue py-10">
        <div className="flex gap-8 md:gap-0 flex-col md:flex-row items-center justify-between md:max-w-4xl mx-auto flex-1 2xl:max-w-6xl">
          <div className="text-left">
            <Image
              src={`${currentDomain}wp-content/uploads/2026/03/logo-empire.png`}
              alt="Logo empire group"
              className="h-20 object-contain w-fit"
              width={558}
              height={308}
            />
          </div>
          <div className="text-white flex-1 flex justify-end font-regular">
            <div className="flex flex-col gap-2">
              <h4 className="font-black text-2xl underline underline-offset-8 decoration-secondary-pink">
                Dyanna Rosemary
              </h4>
              <span className="font-light-italic text-left">Booking agent</span>
              <div className="flex gap-2 items-center pt-4">
                <img
                  src={`${currentDomain}wp-content/uploads/2026/03/ico-whatsapp-pink.png`}
                  className="h-6"
                  alt="Icono whatsapp"
                />
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B17867866289&text&type=phone_number&app_absent=0"
                  target="_blank">
                  +1 (786) 786-6289
                </a>
              </div>
              <div className="flex gap-2 items-center pb-4">
                <img
                  src={`${currentDomain}wp-content/uploads/2026/03/ico-mail-pink.png`}
                  className="h-4"
                  alt="Icono correo"
                />
                <a href="mailto:dyanamanager@gmail.com">dyanamanager@gmail.com</a>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  target="_blank"
                  href="#">
                  <img
                    src={`${currentDomain}wp-content/uploads/2026/03/ico-tiktok.png`}
                    className="h-6"
                    alt="Icono tiktok"
                  />
                </a>
                <a
                  target="_blank"
                  href="#">
                  <img
                    src={`${currentDomain}wp-content/uploads/2026/03/ico-instagram.png`}
                    className="h-6"
                    alt="Icono instagram"
                  />
                </a>
                <a
                  target="_blank"
                  href="#">
                  <img
                    src={`${currentDomain}wp-content/uploads/2026/03/ico-facebook.png`}
                    className="h-6"
                    alt="Icono facebook"
                  />
                </a>
                <a
                  target="_blank"
                  href="#">
                  <img
                    src={`${currentDomain}wp-content/uploads/2026/03/ico-whatsapp.png`}
                    className="h-6"
                    alt="Icono whatsapp"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
