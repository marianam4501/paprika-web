import { Route, Routes } from "react-router";
import { Home } from "../Home"
import Login from "../Login/Login";
import Register from "../Register";
import ViewRecipe from "../Recipe/ViewRecipe";

export default function App() {
  //const user = useSelector(selectUser);
    
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={ <Login />} />
      <Route path="register" element={ <Register />} />
      <Route path="recipe" element = { <ViewRecipe/>}/>
    </Routes>
  )
}