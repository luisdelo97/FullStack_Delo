import AdminNav from "./AdminNav";
import Alerta from "./Alerta";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    pwd_actual: "",
    pwd_nuevo: "",
  });

  const { guardarPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({ msg: "Todos los campos son Obligatorios", error: true });
      return;
    }

    if (password.pwd_nuevo < 6) {
      setAlerta({
        msg: "La contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }

    const respuesta = await guardarPassword(password);
    setAlerta(respuesta);
  };

  const { msg } = alerta;

  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Password
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu
        <span className="text-indigo-600 font-bold"> Password aqui</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600">
                Password Actual
              </label>
              <input
                type="password"
                placeholder="Escribe tu password actual.."
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_actual"
                onChange={(e) => {
                  setPassword({ ...password, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600">
                Password Nuevo
              </label>
              <input
                type="password"
                placeholder="Escribe tu password nuevo.."
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_nuevo"
                onChange={(e) => {
                  setPassword({ ...password, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <input
              type="submit"
              className="bg-indigo-700 px-10 py-3 text-white rounded-lg uppercase w-full mt-5 cursor-pointer hover:bg-indigo-800"
              value="Actualizar"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
