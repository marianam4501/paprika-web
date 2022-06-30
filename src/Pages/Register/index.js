import Header from "../../Components/Header/Index";

export default function Register() {
  return (
    <div>
      <Header />
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
  );
}
//Nombre, Apellido
//Correo
//Password
//<img src="https://rb.gy/iq70yv" alt="Logo Paprika"/> // white
// <img src="https://rb.gy/wh2dps" alt="Logo Paprika"/> // black
//<img src="https://rb.gy/wtkrz5" alt="Logo Paprika"/> // orange
/*
<div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-light-orange peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-orange  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
*/
/* 
<div className="h-20 w-full place-items-stretch bg-black sm:px-4 md:px-8 lg:px-16">
        <img className="h-20" src="https://rb.gy/iq70yv" alt="Logo Paprika" />
      </div>
<div className="flex items-center justify-center h-screen">
        <form className="border-[1px] rounded border-slate-200">
          <div>
            <h1 className="text-3xl font-bold justify-center">Registrarte</h1>
            <br />
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              Nombre:
              <br />
              <input
                className="placeholder:text-gray-400 mx-1 pl-4 h-[48px] w-auto border-[1px] rounded border-black"
                placeholder="Escriba su nombre"
                type="text"
                name="name"
              />
            </div>
            <div className="">
              Apellido:
              <br />
              <input
                type="text"
                className="placeholder:text-gray-400 mx-1 pl-4 h-[48px] w-auto border-[1px] rounded border-black"
                placeholder="Escriba su apellido"
                name="lastname"
              />
            </div>
          </div>
          <div className="pt-2">
            Correo electrónico:
            <br />
            <input
              type="email"
              className="placeholder:text-gray-400 mx-1  pl-4 h-[48px] w-auto border-[1px] rounded border-black"
              placeholder="Escriba su correo"
              name="email"
            />
          </div>
          <div className="">
            Contraseña:
            <br />
            <input
              type="password"
              className="placeholder:text-gray-400 mx-1 pl-4 h-[48px] w-auto border-[1px] rounded border-black"
              placeholder="Escriba su contraseña"
              name="password"
            />
          </div>
          <br />
          <button
            className="bg-light-orange h-[48px] w-full rounded text-white font-bold"
            type="submit"
          >
            Registrarse
          </button>
        </form>
      </div>
*/
