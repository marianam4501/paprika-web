//import { Link } from "react-router-dom";
import React from "react";
import SimpleHeader from "../../Components/SimpleHeader/Index";
import Footer from "../../Components/Footer/Index";
import Mixpanel from "../../services/mixpanel";

export function Home() {
  return (
    <div className="p-0">
      <div className="pb-0">
        <SimpleHeader />
      </div>

      {/* Images background */}
      
      <main className="static h-full">
        
        <div className="h-full w-full pt-44 fixed space-y-20 z-30">
          <div className="bg-white h-56 w-full gap-0 grid justify-items-center">
            <h1 className="text-lg font-semibold tracking-wide text-center pt-5 px-10">
              Join our cooking comunity
            </h1>
            <button
              className="bg-light-orange hover:bg-dark-orange text-black 
            hover:text-white font-semibold  mx-4 h-10 w-auto px-5 rounded"
              onClick={() => {
                Mixpanel.track(Mixpanel.TYPES.CREATE_ACOUNT);
              }}
            >
              <a href="register">Join Paprika</a>
              
            </button>
            <h3 className="text-base font-medium tracking-wide text-center px-10">
              or
            </h3>
            <button
              className="bg-light-orange hover:bg-dark-orange text-black 
            hover:text-white font-semibold  mx-4 h-10 w-auto px-11 rounded"
            >
             <a href="/login">Login</a>
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
