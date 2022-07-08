import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/outline";

export default function RecepiesColumn({ recepi }) {
  return (
    <div id={recepi.id} key={`product_${recepi.id}`}>
      <main className="h-auto w-aut py-1">
        <div className="mb-2 w-auto ">
          <Link to="/recipe">
            <img
              className="object-cover relative h-60 w-44 rounded-lg m-0 -z-0"
              src={recepi.image}
              alt={recepi.name}
            />
          </Link>
          <div className="flex flex-col">
            <label className="text-left ml-1 text-black static text-base hover:text-light-orange">
              {recepi.name}
            </label>

            <button
              type="button"
              className="bg-none p-1 w-8  rounded-full text-black hover:text-dark-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-red-600"
            >
              <HeartIcon className=" h-6"></HeartIcon>{" "}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
