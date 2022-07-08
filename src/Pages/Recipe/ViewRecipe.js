import Header from "../../Components/Header/index.js";
import Footer from "../../Components/Footer/Index.js";
import IngredientList from "../../Components/RecepiIngredients/IngredientList";

import { HeartIcon, ClockIcon, BookmarkIcon } from "@heroicons/react/solid";

const Ingredients = [
  {
    id: 1,
    name: "Galleta María",
    measurement: "packs",
    quantity: 3,
  },
  {
    id: 2,
    name: "Mantequilla",
    measurement: "cups",
    quantity: 2,
  },
];

export default function ViewRecipe() {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <main className="mx-7 pt-5 h-full justify-center content-center w-full">
        <label className="py-5 text-center text-2xl font-semibold text-black">
          POLLO CON GALLETA OREO 🍪
        </label>
        <div className="flex justify-center items-center  my-5 ">
          <div className="flex flex-row">
            <div className="">
              <img
                src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?cs=srgb&dl=pexels-harry-dona-2338407.jpg&fm=jpg"
                alt="fotography"
                className="object-cover relative h-72 w-64 rounded-lg"
              />
            </div>

            <div className="columns-1 w-auto ">
              <div
                className=" content-center"
                class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
              >
                <button type="button">
                  <HeartIcon className="text-black h-8"></HeartIcon>
                  <label className="text-black text-sm"> 12.4 k</label>
                </button>
              </div>

              <div
                className="content-center"
                class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
              >
                <button type="button">
                  <ClockIcon className="text-black h-8"></ClockIcon>

                  <label className="text-black text-sm">2 h</label>
                </button>
              </div>

              <div
                className="content-center"
                class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
              >
                <button type="button">
                  <BookmarkIcon className="text-black h-8"></BookmarkIcon>
                  <label className="text-black text-sm">Safe</label>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* INGREDIENTS */}
        <IngredientList Ingredients={Ingredients} />
      </main>
    </>
  );
}
