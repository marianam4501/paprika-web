//import { Link } from "react-router-dom";
import React from "react";
import SimpleHeader from "../../Components/Headers/SimpleHeader";
import Footer from "../../Components/Footer/Index";
import Mixpanel from "../../services/mixpanel";

export function Home() {
  return (
    <div className="p-0">
      <div className="pb-0">
        <SimpleHeader />
      </div>

      {/* Images background */}

      <main className="static h-full my-5">
        <div className="h-full w-full pt-44 fixed space-y-20 z-30">
          <div className="bg-white h-56 w-full gap-0 grid justify-items-center">
            <h1 className="text-base font-medium tracking-wide text-center pt-5 px-10 my-3">
              Unete a nuestra comunidad de cocineros
            </h1>

            <button
              type="submit"
              className=" justify-self-center py-2 px-8 h-10 w-auto border border-transparent 
              shadow-sm text-base font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              onClick={() => {
                Mixpanel.track(Mixpanel.TYPES.CREATE_ACOUNT);
              }}
            >
              <a href="register">Unete a Paprika</a>
            </button>
            <h3 className="text-base font-medium tracking-wide text-center px-10">
              o
            </h3>
            <button
              type="submit"
              className="mb-14 justify-self-center py-2 px-10 h-10 w-auto border border-transparent 
              shadow-sm text-base font-medium rounded-md text-black bg-light-orange hover:bg-dark-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              onClick={() => {
                Mixpanel.track(Mixpanel.TYPES.GO_TO_LOGIN);
              }}
            >
              <a href="/login">Iniciar sesión</a>
            </button>
          </div>
        </div>

        <div className="mx-5 columns-2 -z-0">
          <div className="px-1 flex flex-col space-y-5">
            {/*   IMG 1  */}
            <img
              className="object-cover relative h-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/B2Sv2HQ/f-5.jpg"
            />
            {/*   IMG 2  (prime)*/}
            <img
              className="object-cover relativeh-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/VYgGCxk/f1.jpg"
            />
            {/*   IMG 3  */}
            <img
              className="object-cover relative h-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/pxdv1PF/f-3.jpg"
            />
            {/*   IMG 4  */}
            <img
              className="object-cover relative h-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/vxBRGfn/f-7.jpg"
            />
            {/*   IMG 5  (prime)*/}
            <img
              className="object-cover relativeh-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/Zm4Hx0p/f-4.jpg"
            />
            {/*   IMG 6  */}
            <img
              className="object-cover relative h-auto w-auto rounded-lg"
              alt="test"
              src="https://bit.ly/3n9MbQp"
            />
            {/*   IMG 7  */}
            <img
              className="object-cover relative h-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/MNm723z/f-6.jpg"
            />
            {/*   IMG 8  (prime)*/}
            <img
              className="object-cover relative h-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/pRqfVT0/f-8.jpg"
            />
            {/*   IMG 9  */}
            <img
              className="object-cover relative h-auto w-auto rounded-lg"
              alt="test"
              src="https://i.ibb.co/BZpw6Vj/f-9.jpg"
            />
          </div>
          {/*-----------------------------------------------------------------------------------*/}
        </div>
      </main>
      <div className="relative inset-x-0 bottom-0 z-40">
        <Footer />
      </div>
    </div>
  );
}
