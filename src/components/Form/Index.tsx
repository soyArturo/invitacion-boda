/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const sendWhatsapp = (type: string) => {
    const brideNumber = "+526644162283";
    let message = `Hola, soy ${name} y confirmo mi asistencia!`;
    if (type === "bride") {
      message = `Hola Adrian y Claudia, soy ${name} y confirmo mi asistencia!`;
      window.open(`https://wa.me/${brideNumber}?text=${message}`);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center w-full py-10">
      <p className="text-3xl px-3 text-center">Confirma tu asistencia!🍻</p>
      <form action="" method="post" className="mt-3 w-full px-3">
        <div className="w-full">
          <label
            htmlFor="full-name"
            className="block text-2xl font-medium leading-6 text-gray-900"
          >
            Nombre completo
          </label>
          <div className="mt-2 w-full">
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="block w-full rounded-md border border-black p-1.5 text-black shadow-sm"
            />
          </div>
        </div>
        <div className="mt-3 flex flex-col space-y-3 justify-center items-center">
          <button
            type="button"
            id="bride-button"
            onClick={() => sendWhatsapp("bride")}
            disabled={!name}
            className="w-full rounded-md bg-beige px-3 py-2 text-base font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 disabled:opacity-50"
          >
            Enviar a novios
          </button>
        </div>
      </form>
      <p className="mt-10 text-2xl">Codigo de vestimenta:</p>
      <p className="text-xl">Formal</p>
      <div className="flex justify-center items-center">
        <img src="https://img.icons8.com/carbon-copy/100/suit.png" alt="suit" />
        <img
          src="https://img.icons8.com/carbon-copy/100/dress-front-view.png"
          alt="dress-front-view"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-xl">Favor de omitir los siguientes colores:</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-white border border-black"></div>
            <p>Blanco</p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-[#2f4538]"></div>
            <p>Verde</p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-beige"></div>
            <p>Beige</p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-red-500"></div>
            <p>Rojo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
