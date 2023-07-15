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
  const [ojo, setOjo] = useState(false);
  const [ojo1, setOjo1] = useState(false);

  const { guardarPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({ msg: "Todos los campos son Obligatorios", error: true });
      return;
    }

    if (password.pwd_nuevo.length < 6) {
      setAlerta({
        msg: "La contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }

    const respuesta = await guardarPassword(password);
    setAlerta(respuesta);

    setTimeout(() => {
      setAlerta({});
    }, 3000);
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
              <div className="relative mt-5">
                <input
                  type={ojo ? "text" : "password"}
                  placeholder="Escribe tu password actual.."
                  className="p-2 border bg-gray-50 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                  name="pwd_actual"
                  onChange={(e) => {
                    setPassword({
                      ...password,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600">
                Password Nuevo
              </label>
              <div className="relative mt-5">
                <input
                  type={ojo1 ? "text" : "password"}
                  placeholder="Escribe tu password nuevo.."
                  className="p-2 border bg-gray-50 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                  name="pwd_nuevo"
                  onChange={(e) => {
                    setPassword({
                      ...password,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 lg:pr-5 cursor-pointer"
                  onClick={() => setOjo1(!ojo1)}
                >
                  {ojo1 ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </div>
              </div>
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
