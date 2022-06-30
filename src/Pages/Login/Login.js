 import SimpleHeader from "../../Components/Header";
 import { StyleSheet } from "../../Styles.css";
 //import { useDispatch } from "react-redux/es/exports";
 import { useState } from "react";
import { login } from "../../Slices/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*
  const dispatch = useDispatch();

 const handleSubmit =(e) =>{
    e.preventDefault();

    dispatch(login({
        email : email,
        password: password,
        loggedIn:true,

      }));
    }
  */
    return (

    <div>
    <SimpleHeader />
    <div className=" flex justify-center items-center h-screen ">

      <form className="form_Login border-4 border-solid h-screen">
            
             <div>
              <img src={require("../../Images/Paprika-logo.png")} alt="Logo" class="logo"
              className="w-[400px] h-[200px]"
              />
            </div>
            
            <h1 className="titleCenter">¡Bienvenido!</h1>
            
            <div className="img-container w-[100px] h-[150px]">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user" class="user"/>
            </div>

            <div className="container_Input mt-3 mb-3">

                <label for="email" className="input_Label"><b>Correo Electrónico</b></label>
                <input type="text" placeholder="Ingrese su Correo Electrónico" name="email" required/>
                
                <label for="psw" className="input_Label" ><b>Contraseña</b></label>
                <input type="password" placeholder="Ingrese su Contraseña" name="psw" required/>
               
                <button type="submmit" className="login_Btn">Iniciar Sesión</button>
            </div>

            <div>
                <h2 className="ml-[180px]">ó</h2>
              
              <button type="button" className="alternative_Btn">Google</button>
              <button type="button" className="alternative_Btn">Facebook</button>
            </div>
            
          

      </form>    
    </div>
  </div>
);
}





/*

<div className="w-screen h-screen flex flex-wrap justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Registrarse</h1>
          <form>
            <div className="mb-4">
              <label>
                Nombre:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded border-black "
                  //className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escriba su nombre"
                  type="text"
                  name="name"
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                Apellido:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded border-black "
                  placeholder="Escriba su apellido"
                  type="text"
                  name="lastname"
                />
              </label>
            </div>
            <div className="mb-4">
              <label for="email-address-icon">
                Correo:
                <br />
                <input
                  className="placeholder:text-gray-400 placeholder:text-sm p-4 h-[28px] w-[250px] border rounded border-black "
                  placeholder="ejemplo@dominio.com"
                  type="email"
                  name="email"
                  required
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
            <button
              className="bg-light-orange h-[28px] w-[250px] mt-4 shadow-md hover:bg-dark-orange rounded text-white font-bold"
              type="submit"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
    
    



*/

