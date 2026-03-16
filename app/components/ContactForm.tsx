"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    numero: "",
    mensaje: "",
  });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("¡Formulario enviado exitosamente!");
        setFormData({ nombre: "", correo: "", numero: "", mensaje: "" });
        setAceptaTerminos(false);
      } else {
        setStatus("error");
        setMessage(data.error || "Error al enviar el formulario");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Error de conexión");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-primary-gray" id="contacto">
      <div className="flex flex-col md:flex-row  md:h-[80vh] 3xl:h-[60vh]">
        <div className="flex-1 flex items-center justify-center relative text-white z-1">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/fondo-contact.png`}
            alt="Fondo contacto"
            className="absolute h-full w-full object-cover top-0"
            width={1300}
            height={1158}
          />
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/arrow-form.png`}
            alt="Flecha contact"
            className="absolute -right-8 h-18 object-contain w-fit hidden md:block"
            width={263}
            height={264}
          />
          <div className="relative z-1 font-regular space-y-10 py-20">
            <h2 className="font-black md:text-5xl text-4xl text-center md:text-left">Contact</h2>
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/ico-whatsapp.png`}
                className="h-8"
                alt="Icono whatsapp"
              />
              <a
                href="https://api.whatsapp.com/send/?phone=%2B17867866289&text&type=phone_number&app_absent=0"
                target="_blank">
                +1 (786) 786-6289
              </a>
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/ico-mail.png`}
                className="h-6"
                alt="Icono correo"
              />
              <a href="mailto:dyanamanager@gmail.com">dyanamanager@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center py-6 md:py-0">
          {" "}
          <form
            onSubmit={handleSubmit}
            className="space-y-2 text-primary-blue px-10 md:px-20 font-regular w-full 3xl:px-40">
            <div>
              <label
                htmlFor="nombre"
                className="mb-2  ">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black  "
              />
            </div>
            <div>
              <label
                htmlFor="numero"
                className="mb-2 ">
                Número teléfonico
              </label>
              <input
                type="tel"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black "
              />
            </div>
            <div>
              <label
                htmlFor="correo"
                className="mb-2 ">
                Correo
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black "
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 ">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-2 py-1 border  border-primary-blue bg-input focus:outline-none focus:border-2 focus:border-primary-pink text-black "
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="aceptaTerminos"
                checked={aceptaTerminos}
                onChange={(e) => setAceptaTerminos(e.target.checked)}
                required
                className="w-4 h-4 accent-purple cursor-pointer"
              />
              <label
                htmlFor="aceptaTerminos"
                className="text-sm  cursor-pointer text-primary-blue">
                Acepto el tratamiento de datos personales
              </label>
            </div>

            <div className="bg-transparent border gradient-border-image text-primary-blue py-1 px-4 rounded-full! hover:text-white disabled:opacity-50  font-poppins flex justify-evenly items-center w-30! hover:btn-primary-gradiant cursor-pointer">
              <button
                type="submit"
                disabled={status === "loading"}
                className="">
                {status === "loading" ? "Enviando..." : "Enviar"}
              </button>
              <img
                className="h-2"
                src={`${currentDomain}wp-content/uploads/2026/03/arrow-blue.png`}
                alt=""
              />
            </div>

            {message && (
              <div
                className={` p-4 rounded ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
