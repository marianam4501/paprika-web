import SimpleHeader from "../../Components/Header/index.js";
import { useState } from "react";

const testRecipes = [
  {
    id: 1,
    userId: 2,
    name: "Pie de limón",
    ingredients: [
      {
        id: 1,
        name: "Galleta María",
        measurement: "unidad(es)",
        quantity: 3,
      },
      {
        id: 2,
        name: "Mantequilla",
        measurement: "unidad(es)",
        quantity: 2,
      },
      {
        id: 3,
        name: "Leche condensada",
        measurement: "taza(s)",
        quantity: 1,
      },
      {
        id: 4,
        name: "Limón",
        measurement: "mililitro(s)",
        quantity: 250,
      },
    ],
    steps: "Duración: 1 hora. Dificultad: Intermedia.",
    image: "https://i.ibb.co/GM1DBkM/pie-de-limon.png",
  },
  {
    id: 2,
    userId: 2,
    name: "Queque de banano",
    ingredients: [
      {
        id: 1,
        name: "Banano",
        measurement: "unidad(es)",
        quantity: 4,
      },
      {
        id: 2,
        name: "Harina",
        measurement: "taza(s)",
        quantity: 3,
      },
      {
        id: 3,
        name: "Leche",
        measurement: "taza(s)",
        quantity: 2,
      },
    ],
    steps: "Duración: 1 hora. Dificultad: Fácil.",
    image: "https://i.ibb.co/jLjN3bq/queque-de-banano.jpg",
  },
  {
    id: 3,
    userId: 3,
    name: "Spaghetti a la boloñesa",
    ingredients: [
      {
        id: 1,
        name: "Spaghetti",
        measurement: "unidad(es)",
        quantity: 1,
      },
      {
        id: 2,
        name: "Tomates",
        measurement: "unidad(es)",
        quantity: 3,
      },
      {
        id: 3,
        name: "Carne molida",
        measurement: "kilogramo(s)",
        quantity: 1,
      },
    ],
    steps: "Duración: 45 minutos. Dificultad: Fácil.",
    image: "https://i.ibb.co/x2crJQt/spaguetti.jpg",
  },
  {
    id: 4,
    userId: 4,
    name: "Filet de pargo rojo al pesto",
    ingredients: [
      {
        id: 1,
        name: "Spaghetti",
        measurement: "unidad(es)",
        quantity: 1,
      },
      {
        id: 2,
        name: "Tomates",
        measurement: "unidad(es)",
        quantity: 3,
      },
      {
        id: 3,
        name: "Carne molida",
        measurement: "kilogramo(s)",
        quantity: 1,
      },
    ],
    steps: "Duración: 45 minutos. Dificultad: Fácil.",
    image:
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
  },
];

export default function Feed() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <SimpleHeader />
      <div className="mx-5 columns-2 -z-0">
        {testRecipes.map((R) => {
          return (
            <div
              key={`product_${R.id}`}
              className="px-1 flex flex-col space-y-5 static"
              onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            >
              <div>
                <img
                  className="object-cover relative h-auto w-auto rounded-lg mt-3"
                  src={R.image}
                  alt={R.name}
                />
            
              </div>    
              {isHovering && (
                  <div className="bg-light-orange opacity-100 rounded-lg font-black mb-7">
                    <h1 className="text-center opacity-100 static">{R.name}</h1>
                    <button className="button_hover mb-8">
                      <img src={require("../../Images/like.png") } className="h-7 w-7" alt="like"/>
                    </button>
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
