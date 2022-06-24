import { Route, Routes } from "react-router";
import { AddRecipe } from "../AddRecipe";
import { Home } from "../Home"
import Login from "../Login";
import Register from "../Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={ <Login />} />
      <Route path="register" element={ <Register />} />
      <Route path="Add_recipe" element={ <AddRecipe />} />
    </Routes>
  )
}