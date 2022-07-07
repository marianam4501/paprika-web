import Header from "../../Components/SimpleHeader/Index";
import Footer from "../../Components/Footer/Index";

export default function Register() {
  return (
    <div>
      <div className="mb-5">
        <Header />
      </div>
      
      <div className="w-auto h-auto flex flex-wrap justify-center mb-32">
        <div>
          <h1 className="text-3xl font-bold my-5">Registrarse</h1>
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
            <div>
            <button
              className="bg-light-orange  mt-4 shadow-md hover:bg-dark-orange rounded text-white font-bold"
              type="submit"
            >
              <a href="Feed">Registrarse</a>
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

