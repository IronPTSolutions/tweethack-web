import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import AuthContext from "./contexts/AuthContext"
import Profile from "./pages/Profile"

function App() {
  const { isAuthFetched } = useContext(AuthContext);
  
  return (
    <div>
      <Navbar />

      {isAuthFetched ? (
        <div className="max-w-container border-x-2 border-tw-light-gray mx-auto min-h-body p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      ) : null}
    </div>
  )
}

export default App
