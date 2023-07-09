import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);

  const { token } = useParams();
  console.log(token);

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({ msg: "Coloca tu nuevo Password", error: false });
        setTokenValido(true);
      } catch (error) {
        setAlerta({ msg: "Hubo un error en el enlace", error: true });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const { data } = await clienteAxios.post(
    //     "/veterinarios/olvide-password",
    //     {
    //       password,
    //     }
    //   );
    //   setAlerta({
    //     msg: data.msg,
    //     error: false,
    //   });
    //   setPassword("");
    //   console.log(data);
    // } catch (error) {
    //   setAlerta({ msg: error.response.data.msg, error: true });
    // }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl ">
          Ingresa tu Nueva Contraseña y no Pierdas tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}

        {tokenValido && (
          <form action="" onSubmit={handleSubmit}>
            {/* Nuevo Password */}
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor=""
              >
                Nuevo Password
              </label>
              <input
                type="password"
                placeholder="Nuevo Password de registro"
                required
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Submit */}
            <input
              type="submit"
              className="bg-indigo-700 w-full text-white py-3 px-10 rounded-xl font-bold uppercase mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
              value="Guardar"
            />
          </form>
        )}
      </div>
    </>
  );
};

export default NuevoPassword;
