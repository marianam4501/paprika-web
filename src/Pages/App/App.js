import { Route, Routes } from "react-router";
import { AddRecipe } from "../AddRecipe";
import { Home } from "../Home"
import Login from "../Login/Login";
import Register from "../Register";
import {Profile} from "../Profile";
import ViewRecipe from "../Recipe/ViewRecipe";
import Feed from "../Feed/Feed";
import Unathorized from "../Unathorized"
import PrivateRoute from "../../Components/PrivateRoute";
import { ROLES } from "../../Utils/constants";

export default function App() {
  //const user = useSelector(selectUser);
  // const loading = useSelector(
  //   (state) => state.app.loading
  // );
  return  (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={ <Login />} />
      <Route path="register" element={ <Register />} />
      <Route path="/no-autorizado" element={<Unathorized />} />
      <Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="recipe/:id" element = { <ViewRecipe/>}/>
        <Route path="Feed" element = { <Feed/>}/>
        <Route path="Add_recipe" element={ <AddRecipe />} />
        <Route path="Profile" element={ <Profile />} />
      </Route>
    </Routes>
  ) ; 
  
}