import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SimpleHeader from "../../Components/Header/index.js";

export default function ViewRecipe() {

  //const [Recipe, setRecipe] = useState(null);
  
  const Recipe = useSelector(
    (state) => state.recipe
  );
  console.log(Recipe);
  
  return  Recipe ? (
    <div>
      <SimpleHeader />
      <div className="flex justify-center items-center  mt-4 ">
        <div
          className=" recipe_BackgroundBlk border-solid border-4 ">
          <div >
            <img
              src={require("../../Images/Paprika-logo.png")}
              alt="Logo"
              className=" h-[300px] w-[600px] mt-4"
            />
          </div>

          <div className="grid grid-rows-3 grid-flow-col gap-4 ">
            <div className="row-span-3 ...">
              <img
                src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="fotography"
                className=" h-[240px] w-[280px] ml-2 mb-2 
                md:h-[300px] md:w-[500px] md:ml-24  md:mb-20 sm:h-6 sm:w-9  "
              />
            </div>
            <div
              className=" content-center"
              class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
            >
              <button type="button">
                <img
                  src={require("../../Images/like.png")}
                  alt="fotography"
                  className="h-[25px] w-[25px] md:h-[55px] md:w-[45px] "
                />
                <h3> 12.4 k</h3>
              </button>
            </div>

            <div
              className="content-center"
              class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
            >
              <button type="button">
                <img
                  src={require("../../Images/time.png")}
                  alt="fotography"
                  className="h-[25px] w-[25px] md:h-[45px] md:w-[45px]"
                />

                <h3> 2 h </h3>
              </button>
            </div>

            <div
              className="content-center"
              class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:trasnparent duration-300"
            >
              <button type="button">
                <img
                  src={require("../../Images/save.png")}
                  alt="fotography"
                  className="h-[25px] w-[25px] md:h-[45px] md:w-[45px]"
                />
              </button>
            </div>
          </div>
          <h2 className="titleCenter ml-[40px] md:ml-[180px]" color="black">
            {Recipe.recipe.name}
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div
          className="recipe_BackgroundOrg flex justify-center
         items-center object-contain w-screen md:w-[705px] mb-4 border-solid border-4"
        >
          <div className="bg-white ml-4 mr-4 mb-4 mt-4 items-center ">
            <table className="table-fixed border-separate border border-black text-4xl">
              <thead className="border border-black">
                <tr>
                  <th className="border border-black">Ingredient </th>
                  <th className="border border-black"> Amount</th>
                </tr>
              </thead>
              <tbody className="text-center ">
                <tr>
                  <td className="border border-black">Chayote</td>
                  <td className="border border-black">4 kilos</td>
                </tr>
                <tr>
                  <td className="border border-black">Piña</td>
                  <td className="border border-black">12 kilos</td>
                </tr>
                <tr>
                  <td className="border border-black">Uvas</td>
                  <td className="border border-black">2 viñedos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ): <div>
    Vacio
  </div>;
}
