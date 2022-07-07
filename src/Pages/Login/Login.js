import SimpleHeader from "../../Components/Header/index.js";
import { useDispatch , useSelector } from "react-redux";
import { StyleSheet } from "../../Styles.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { postLogin } from "../../Slices/User/Requests/postLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);

  const dispatch = useDispatch();

  
  return userIsLoggedIn ? (
    <Navigate to="/" />
  ) :  (
    <div>
      <SimpleHeader />
      <div className=" flex justify-center items-center  mt-2  ">
        <form className="form_Login  ">
          <div>
            <img
              src={require("../../Images/Paprika-logo.png")}
              alt="Logo"
              class="logo"
              className="w-[400px] h-[200px]"
            />
          </div>

          <h1 className="titleCenter">¡Bienvenido!</h1>

          <div className="img-container w-[100px] h-[150px]
          transition ease-in-out delay-150  hover:-translate-y-1 
          hover:scale-110 hover:trasnparent duration-300 
          ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="user"
              class="user"
            />
          </div>

          <label className="container_Input mt-3 mb-3">
            <label for="email" className="input_Label transition 
            ease-in-out delay-150  hover:-translate-y-1 
             hover:scale-110 hover:trasnparent duration-300 ">
              <b>Correo Electrónico</b>
            </label>
            <input className="transition ease-in-out delay-150  hover:-translate-y-1 
             hover:scale-110 hover:trasnparent duration-300 
             text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded border-black"
              type="email"
              placeholder="Ingrese su Correo Electrónico"
              name="email"
              value={email}
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
              required
            />

            <label for="psw" className="input_Label transition
             ease-in-out delay-150  hover:-translate-y-1 
             hover:scale-110 hover:trasnparent duration-300 
             ">
              <b>Contraseña</b>
            </label>
            <input className="transition ease-in-out delay-150  hover:-translate-y-1 
             hover:scale-110 hover:trasnparent duration-300 
             text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded border-black"
              type="password"
              placeholder="Ingrese su Contraseña"
              name="psw"
              value={password}
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
            />

            <button 
             class="transition login_Btn  ease-in-out delay-150  hover:-translate-y-1 
             hover:scale-110 hover:trasnparent duration-300 login_Btn"
             onClick={() => {
              dispatch(
                postLogin(
                  email,
                  password,
                )
              
              );
            }}
            >
              Iniciar Sesión
            </button>
          </label>

          <label>
            <h2 className="ml-[180px]">ó</h2>

            <button type="button" className="alternative_Btn ml-2"
            >
              Google
            </button>
            <button type="button" className="alternative_Btn ml-2"
            >
              Facebook
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
