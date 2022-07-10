import SimpleHeader from "../../Components/Headers/SimpleHeader";
import Footer from "../../Components/Footer/Index.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { postLogin } from "../../Slices/User/Requests/postLogin";
import Mixpanel from "../../services/mixpanel";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);

  const dispatch = useDispatch();

  return userIsLoggedIn ? (
    <Navigate to="/Feed" />
  ) : (
    <div>
      <SimpleHeader />
      <main className="static h-full mt-10 mb-72 mx-10 justify-center gap-y-5 ">
        <div className="grid mt-1 mb-0 columns-1 justify-center gap-y-5">
          <h1 className="text-4xl tracking-wider">¡Bienvenido!</h1>
          {/* <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-500 justify-self-center">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span> */}
          <img className="h-40 w-40 justify-self-center" src="https://i.ibb.co/3FtCSXG/taco.gif" alt="Logo Paprika" />
        </div>
        <div className="grid mb-10 columns-1 justify-center gap-y-2"></div>
       
        <h6 className="text-lg text-black">Correo Electrónico:</h6>
        <input
          className="appearance-none mb-5 form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding
            border-[3px] border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-light-orange focus:outline-none"
          type="email"
          placeholder="Ingrese su correo electrónico"
          name="email"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          required
        ></input>
        <h6 className="text-lg text-black">Contraseña:</h6>
        <input
          type="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-light-orange focus:outline-none"
          placeholder="Ingrese su contraseña"
          value={password}
          name="psw"
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        ></input>


        <div className="gap-0 grid justify-items-center mt-6">
          <button
            className="w-44 justify-self-center py-2 px-6 border border-transparent 
              shadow-sm text-sm font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            onClick={() => {
              Mixpanel.track(Mixpanel.TYPES.TRY_LOGIN);
              dispatch(postLogin({email, password}));
            }}>
             
             Iniciar sesión
          </button>
          <h3 className="text-base font-normal tracking-wide text-center px-10">
            ó
          </h3>
          <button
            className="w-44 justify-self-center py-2 px-6 border border-transparent 
              shadow-sm text-sm font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <a href="/register">Registrarse</a>
            
          </button>
        </div>
      </main>
      <div className="relative inset-x-0 bottom-0 z-40">
        <Footer />
      </div>
    </div>
  );
}