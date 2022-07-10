import { Route, Routes } from "react-router";
import { AddRecipe } from "../AddRecipe";
import { Home } from "../Home"
import Login from "../Login/Login";
import Register from "../Register";
import {Profile} from "../Profile";
import ViewRecipe from "../Recipe/ViewRecipe";
import Feed from "../Feed/Feed";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Loading/index";

export default function App() {
  //const user = useSelector(selectUser);
  const loading = useSelector(
    (state) => state.app.loading
  );
  return loading ? (
    <Spinner/>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={ <Login />} />
      <Route path="register" element={ <Register />} />
      <Route path="recipe" element = { <ViewRecipe/>}/>
      <Route path="Feed" element = { <Feed/>}/>
      <Route path="Add_recipe" element={ <AddRecipe />} />
      <Route path="Profile" element={ <Profile />} />
    </Routes>
  )
}