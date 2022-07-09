import Header from "../../Components/SimpleHeader/Index";
import Footer from "../../Components/Footer/Index";
import { createUser } from "../../Slices/User/Requests/createUser";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [UserPicture, setUserPicture] = useState(null);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mb-5">
        <Header />
      </div>

      <div className="w-auto h-auto flex flex-wrap justify-center mb-32">
        <div>
          <h1 className="text-3xl font-bold my-5">🍺 Registrarse 🌶</h1>
          <form>
            <div className="content-center mt-1 flex justify-center border-2 h-60 w-60 border-gray-300 border-dashed rounded-full">
              {!UserPicture && (
                <div className=" space-y-1 text-center justify-center mt-5">
                  <div className="columns-1 justify-center  text-sm text-gray-600">
                    <img
                      className="object-cover h-14 w-22 mb-3 mx-[65px] mt-10"
                      src="https://i.ibb.co/dBvR1v0/fast-food.png"
                      alt="Logo Paprika"
                    />
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-dark-orange hover:text-light-orange focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-orange"
                    >
                      <input
                        id="recepiPicture"
                        onChange={(evt) => {
                          setUserPicture(evt.target.files[0]);
                        }}
                        name="file-upload"
                        type="file"
                        className="w-[185px]"
                      />
                    </label>
                  </div>
                </div>
              )}

              {UserPicture && (
                <div>
                  <img
                    src={URL.createObjectURL(UserPicture)}
                    alt="Product preview"
                    className="rounded-full h-full w-full"
                  />
                </div>
              )}
            </div>
            {UserPicture && (
            <button
                    onClick={() => {
                      setUserPicture(null);
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Eliminar
                  </button>
            )}
            <div className="my-4">
              <label>
                Nombre:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded-lg border-black "
                  //className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escriba su nombre"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(evt) => {
                    setName(evt.target.value);
                  }}
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                Apellido:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded-lg border-black "
                  placeholder="Escriba su apellido"
                  type="text"
                  name="lastname"
                  value={lastName}
                  onChange={(evt) => {
                    setlastName(evt.target.value);
                  }}
                />
              </label>
            </div>
            <div className="mb-4">
              <label for="email-address-icon">
                Correo:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border-[3px] rounded-lg appearance-none border-black "
                  placeholder="ejemplo@dominio.com"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(evt) => {
                    setEmail(evt.target.value);
                  }}
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                Contraseña:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded border-black "
                  placeholder="Escriba su contraseña"
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(evt) => {
                    setPassword(evt.target.value);
                  }}
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                Repita su contraseña:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded border-black "
                  placeholder="Confirme su contraseña"
                  type="password"
                  name="repeat-password"
                  required
                />
              </label>
            </div>
            <div>
            <button
              className="bg-light-orange  mt-4 shadow-md hover:bg-dark-orange rounded text-white font-bold"
              type="submit"
              onClick={() => {
                dispatch(createUser(name,lastName,email, password));
              }}
            >
              <a href="/feed">Registrarse</a>
            </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative inset-x-0 bottom-0 z-40">
        <Footer />
      </div>
    </div>
  );
}
