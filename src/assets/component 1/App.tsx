import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Navbar from "./NavBar"
import Signup from "./Signup"

function App() {

  return (
    <div>
      <Navbar/>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
          <Route path = "/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App