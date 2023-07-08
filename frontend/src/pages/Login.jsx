const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl ">
          Inicia Sesion y Administra tus{" "}
          <span className="text-black">Pacientes</span>
        </h1>
      </div>
      <div>
        <form action="">
          <div className="my-5">
            {/* Email */}
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
            {/* Email */}
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
          {/* Submit */}
          <input
            type="submit"
            className="bg-indigo-700 w-full text-white py-3 px-10 rounded-xl font-bold uppercase mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
            value="Iniciar Sesion"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
