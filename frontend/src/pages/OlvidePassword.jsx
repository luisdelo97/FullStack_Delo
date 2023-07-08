import { Link } from "react-router-dom";
const OlvidePassword = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl ">
          Recupera tu Acceso y no Pierdas tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form action="">
          {/* Email */}
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor=""
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email de registro"
              required
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          {/* Submit */}
          <input
            type="submit"
            className="bg-indigo-700 w-full text-white py-3 px-10 rounded-xl font-bold uppercase mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
            value="Enviar"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/registrar"
          >
            No tienes una cuenta? Registrate!!
          </Link>
        </nav>
      </div>
    </>
  );
};

export default OlvidePassword;
