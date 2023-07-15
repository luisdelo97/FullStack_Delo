import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [ojo, setOjo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }
    if (password !== confirmPassword) {
      setAlerta({ msg: "Las contraseñas no coinciden", error: true });
      return;
    }

    //Creando el usuario en la api
    try {
      const respuesta = await clienteAxios.post("/veterinarios", {
        nombre,
        email,
        password,
      });
      setAlerta({
        msg: "Creado correctamente, revisa tu email",
        error: false,
      });
      //Estas lineas hacen reset de los campos una vez se accione y se cree el usuario
      setTimeout(() => {
        setAlerta({});
      }, 3000);
      setNombre("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      console.log(respuesta);
    } catch (error) {
      console.log(error);
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl ">
          Crea tu Cuenta y Administra tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {/* si existe el mensaje muestra la alerta */}
        {msg && <Alerta alerta={alerta} />}
        <form action="" onSubmit={handleSubmit}>
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <div className="relative mt-3">
              <input
                type={ojo ? "text" : "password"}
                placeholder="Password"
                required
                className="p-3 border bg-gray-50 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 lg:pr-5 cursor-pointer"
                onClick={() => setOjo(!ojo)}
              >
                {ojo ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </div>
            </div>
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Link
            className="block text-center my-5 text-gray-500"
            to="/olvide-password"
          >
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
