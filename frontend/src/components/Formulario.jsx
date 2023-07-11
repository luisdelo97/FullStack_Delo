const Formulario = () => {
  return (
    <>
      <p className="text-lg text-center mb-10">
        Añade tus Paciente y
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      <form action="" className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md">
        <div className="mb-5">
          <label htmlFor="mascota" className="text-gray-700 uppercase">
            Mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="text-gray-700 uppercase">
            Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase">
            Email del Propietario
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="text-gray-700 uppercase">
            Fecha de Alta
          </label>
          <input
            type="date"
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="text-gray-700 uppercase">
            Sintomas de la Mascota
          </label>
          <textarea
            id="sintomas"
            placeholder="Escriba los Sintomas de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 font-bold text-white p-3 uppercase w-full  hover:bg-indigo-800 cursor-pointer transition-colors"
          value="Agregar Paciente"
        />
      </form>
    </>
  );
};

export default Formulario;
