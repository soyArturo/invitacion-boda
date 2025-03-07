const Info = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col justify-center items-center w-full">
        <img src="https://img.icons8.com/carbon-copy/75/null/wedding-rings.png" />
        <p className="text-3xl">Ceremonia</p>
        <div className="text-white text-xl bg-guinda px-8 py-2 rounded-lg mt-3">
          5:00 pm
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-3">
        <p className="text-xl text-center">
          Parroquia Nuestra Señora de Guadalupe Reina de México
        </p>
        <a
          href="https://maps.app.goo.gl/7iZwS79MJoCofoPJ9"
          target="_blank"
          className="text-black text-xl bg-beige px-8 py-2 rounded-lg mt-3"
        >
          Ver ubicacion
        </a>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="https://img.icons8.com/carbon-copy/75/null/champagne.png" />
        <p className="text-4xl">Recepcion</p>
        <div className="text-white text-xl bg-guinda px-8 py-2 rounded-lg mt-3">
          7:00 pm
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-3">
        <a
          href="https://maps.app.goo.gl/kJYCyRTMhXDGYT1f7"
          target="_blank"
          className="text-black text-xl bg-beige px-8 py-2 rounded-lg mt-3"
        >
          Ver ubicacion
        </a>
      </div>
    </div>
  );
};

export default Info;
