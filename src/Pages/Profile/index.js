import React, { useEffect, useState } from "react";
// import React, { useState, useRef, useId, useEffect } from "react";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/Index";
import RecepiesBlock from "../../Components/RecepiesBlock/index";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/User/userSlice";

export function Profile() {
  const [profile, setProfile] = useState(null);

  const id = useSelector(
    (state) => state.user.user.id
  );
  
  const dispatch = useDispatch();

  useEffect (() => {
    const profileFetch = async() => {
      const fetchProfile = await fetch (`https://paprika-api.herokuapp.com/users/${id}`);
      
      const profileJSON = await fetchProfile.json();
      if (fetchProfile.status === 200) {
        setProfile(profileJSON);
      } else {
        console.log("Error al cargar el perfil");
      }
    };
    profileFetch();
  },[]);

  const loading = useSelector(
    (state) => state.app.loading
  );


  return profile ? (
    
    <div>
      <Header />
      <main className="static h-full mt-10 mb-20 mx-5 justify-center gap-y-5">
        <div className="h-6 w-full grid justify-items-stretch">
          <img
            className="h-6 w-6 justify-self-end"
            src="https://i.ibb.co/DLsKCmP/setting.png"
            alt="userPic"
          />
        </div>
        <div className="grid mt-1 mb-10 columns-1 justify-center gap-y-5">
          <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-500 justify-self-center">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <label className="block text-lg font-normal text-black justify-self-center">
            {profile.user.name} {profile.user.lastname}
          </label>
          <div className="columns-2 justify-center mb-2">
            <div className="grid justify-center gap-y-2 mb-2">
              <label className="block text-xs font-normal text-black justify-self-center">
                666 followers
              </label>
              <button
                type="submit"
                className="inline-flex justify-se;f-center py-2 px-6 border border-transparent 
              shadow-sm text-sm font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                My recepies
              </button>
            </div>
            <div className="grid justify-center gap-y-2 mb-2">
              <label className="block text-xs font-normal text-black justify-self-center">
                69 follows
              </label>

              <button
                type="submit"
                className="inline-flex justify-center py-2 px-11 border border-transparent 
              shadow-sm text-sm font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                onClick={() => {
                dispatch(logout());
                }}
              >
            
                Saved
              </button>
            </div>
          </div>
          <div className="columns-2 justify-center mb-2">
            <RecepiesBlock />
            <RecepiesBlock />
          </div>
        </div>
      </main>
      <div className="relative inset-x-0 bottom-0 z-40">
        <Footer />
      </div>
    </div>
  ): <div>
      Vacio
  </div> ;
}
