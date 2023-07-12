import AdminNav from "./AdminNav";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const EditarPerfil = () => {
  const { auth } = useAuth();
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);
  console.log(perfil);
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu
        <span className="text-indigo-600 font-bold"> Imformacion aqui</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form onSubmit={null}>
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
              />
            </div>
            <input
              type="submit"
              className="bg-indigo-700 px-10 py-3 text-white rounded-lg uppercase w-full mt-5"
              value="Guardar Cambios"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;