import Header from "../../Components/Headers/SimpleHeader";
import Footer from "../../Components/Footer/Index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Slices/User/Requests/createUser";
import Spinner from "../../Components/Loading";

export default function Register() {
  const dispatch = useDispatch();
  const navigationB = useNavigate();
  const [userPicture, setUserPicture] = useState(false);
  const [pictureState,setPictureState ]= useState(true);
  const [user, setUser] = useState({
    name : "",
    lastname: "",
    email:"",
    password:""
  });
  
  const onAfterUpload = (value) => {
    const _user = { ...user, value };
    dispatch(createUser(_user));
    setPictureState(true);
    navigationB("/login");
  };

  function setPictureOnUpload() {
    async function upload() {
      const form = new FormData();
      form.append("file", userPicture);
      const uploadFetch = await fetch(
        "https://paprika-api.herokuapp.com/upload",
        {
          method: "POST",
          body: form,
        }
      );
      const uploadData = await uploadFetch.json();
      return uploadData;
    }

    upload().then((uploadData) => {
      onAfterUpload(uploadData.url);
    });
  }

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  return pictureState? (
    <div>
      <div className="mb-5">
        <Header />
      </div>
      <div className="w-auto h-auto flex flex-wrap justify-center mb-32">
        <div>
          <h1 className="text-3xl font-bold my-5">🍺 Registrarse 🌶</h1>
          <form>
            <div className="content-center mt-1 flex justify-center border-2 h-60 w-60 border-gray-300 border-dashed rounded-full">
              {!userPicture && (
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
                        id="userPicture"
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

              {userPicture && (
                <div>
                  <img
                    src={URL.createObjectURL(userPicture)}
                    alt="New_user_image"
                    className="rounded-full h-full w-full"
                  />
                </div>
              )}
            </div>
            {userPicture && (
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
                  value={user.name}
                  onChange={(evt) => {
                    handleChange("name", evt.target.value);
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
                  value={user.lastname}
                  onChange={(evt) => {
                    handleChange("lastname", evt.target.value);
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
                  value={user.email}
                  onChange={(evt) => {
                    handleChange("email", evt.target.value);
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
                  value={user.password}
                  onChange={(evt) => {
                    handleChange("password", evt.target.value);
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
                setPictureState(false);
                if (userPicture != null) {
                  setPictureOnUpload();
                } else {
                  var value = "https://ci0137.s3.amazonaws.com/paprika/defaultUser.png";
                  const _user = { ...user, value};
                  dispatch(createUser(_user));
                }
              }}
            >
              Registrarse
            </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative inset-x-0 bottom-0 z-40">
        <Footer />
      </div>
    </div>
  ):(<Spinner/>);
}
