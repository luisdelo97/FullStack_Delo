import AdminNav from "./AdminNav";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Alerta from "./Alerta";

const EditarPerfil = () => {
  const { auth, actualizarPerfil } = useAuth();
  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resultado = await actualizarPerfil(perfil);

    setAlerta(resultado);
  };

  const { msg } = alerta;

  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu
        <span className="text-indigo-600 font-bold"> Informacion aqui</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Escribe tu nombre.."
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="nombre"
                value={perfil.nombre || ""}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600">
                Sitio Web
              </label>
              <input
                type="text"
                placeholder="Escribe tu sitio web.."
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="web"
                value={perfil.web || ""}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600">
                Telefono
              </label>
              <input
                type="text"
                placeholder="Escribe tu telefono.."
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="telefono"
                value={perfil.telefono || ""}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600">
                Email
              </label>
              <input
                type="text"
                required
                placeholder="Escribe tu email.."
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="email"
                value={perfil.email || ""}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <input
              type="submit"
              className="bg-indigo-700 px-10 py-3 text-white rounded-lg uppercase w-full mt-5 cursor-pointer hover:bg-indigo-800"
              value="Guardar Cambios"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
