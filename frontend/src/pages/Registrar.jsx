import { Link } from "react-router-dom";
const Registrar = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl ">
          Crea tu Cuenta y Administra tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form action="">
          {/* Name */}
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor=""
            >
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre completo"
              required
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
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
          {/* Password */}
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor=""
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          {/* Repite Password */}
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor=""
            >
              Repite tu Password
            </label>
            <input
              type="password"
              placeholder="Repite su Password"
              required
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          {/* Submit */}
          <input
            type="submit"
            className="bg-indigo-700 w-full text-white py-3 px-10 rounded-xl font-bold uppercase mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
            value="Registrar"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/olvide">
            Olvidaste tu password?
          </Link>
          <Link className="block text-center my-5 text-gray-500" to="/">
            Ya tienes una cuenta? Inicia Sesion!
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Registrar;
