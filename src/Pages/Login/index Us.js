 import Header from "../../Components/Header";
 import { StyleSheet } from "../Login/Styles.css";

export default function Login() {
  return (
    <html>
    <div>
      <Header />
        <body className="flex items-center justify-center h-screen">
          
          
          <form>
          <div className="img-container">
              <img src={require("../../Images/Paprika-logo.png")} alt="Logo" class="logo"/>
            </div>
            <h1 className="titleCenter">¡Bienvenido Username!</h1>
            <div className="img-container">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user" class="user"/>
            </div>
            
            <div className="container_Input">

                <label for="psw" className="input_Label" ><b>Contraseña</b></label>
                <input type="password" placeholder="Ingrese su Contraseña" name="psw" required/>
               
                <button type="submmit" className="login_Btn">Iniciar Sesión</button>
            </div>
            <h2 className="login">ó</h2>
            <div className="container">
              <button type="button" className="alternative_Btn">Google</button>
              <button type="button" className="alternative_Btn">Facebook</button>
            </div>

          </form>            
        </body>
      </div>
    </html>
  )
}