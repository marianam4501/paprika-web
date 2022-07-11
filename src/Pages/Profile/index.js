import React, { useEffect, useState } from "react";
// import React, { useState, useRef, useId, useEffect } from "react";
import Header from "../../Components/Headers/Header";
import Footer from "../../Components/Footer/Index";
import RecepiesBlock from "../../Components/RecepiesBlock/PostsList";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Loading/index";

export function Profile() {
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const follows = randomNumberInRange(130, 233)
  const followers = randomNumberInRange(99, 563)

  const [profile, setProfile] = useState(null);

  const id = useSelector((state) => state.user.user.id);

  useEffect(() => {
    const profileFetch = async () => {
      const fetchProfile = await fetch(
        `https://paprika-api.herokuapp.com/users/${id}`
      );

      const profileJSON = await fetchProfile.json();
      if (fetchProfile.status === 200) {
        setProfile(profileJSON);
      } else {
        console.log("Error al cargar el perfil");
      }
    };
    profileFetch();
  }, [id]);

  return profile ? (
    <div>
      <Header />
      <main className="static h-full mt-10 mb-20 mx-5 justify-center gap-y-5">
        <div className="grid mt-1 mb-10 columns-1 justify-center gap-y-5">
          {profile.user.profile_picture !== "" && (
            <img
              className="object-cover justify-self-center pa-5 rounded-full h-72 w-72"
              src={profile.user.profile_picture} //profile image
              alt="userPic"
            />
          )}
          {/* <div className="h-6 w-full grid justify-items-stretch"></div> */}
          {profile.user.profile_picture === "" && (
            <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-500 justify-self-center">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}

          <label className="block text-lg font-normal text-black justify-self-center">
            {profile.user.name} {profile.user.lastname}
          </label>
          <div className="grid grid-cols-2 gap-x-9 ">
            <div className="grid justify-center gap-y-2 mb-2">
              <label className="block text-xs font-normal text-black justify-self-center">
              {followers} seguidores
              </label>
              <button
                type="submit"
                className="inline-flex justify-se;f-center py-2 px-7 border border-transparent 
              shadow-sm text-sm font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Mis recetas
              </button>
            </div>
            <div className="grid justify-self-center justify-center gap-y-2 mb-2">
              <label className="block text-xs font-normal text-black justify-self-center">
              {follows} seguidos
              </label>

              <button
                type="submit"
                className="inline-flex justify-center py-2 px-8 border border-transparent 
              shadow-sm text-sm font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Guardado
              </button>
            </div>
          </div>
          <RecepiesBlock recipes={profile.recipes}  />
         
        </div>
      </main>
      <div className="relative inset-x-0 bottom-0 z-40">
        <Footer />
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
