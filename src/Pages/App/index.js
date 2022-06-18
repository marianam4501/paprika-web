import { Route, Routes } from "react-router";
import { Home } from "../Home"
import Login from "../Login";
import Register from "../Register";

export default function App() {
  return (
    <Routes>
      
      <Route path="login" element={ <Login />} />
      <Route path="/" element={ <Register />} />
    </Routes>
  )
}