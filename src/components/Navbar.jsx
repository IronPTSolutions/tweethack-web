import { Link, NavLink } from "react-router-dom";
import TwitterLogo from "../assets/TwitterLogo";

const Navbar = () => {
  const unprotectedRoutes = [
    {
      to: '/login',
      text: 'Login'
    },
    {
      to: '/register',
      text: 'Register'
    },
  ]

  return (
    <div className="bg-tw-primary p-3 h-[70px] flex items-center">
      <div className="flex justify-between items-center max-w-container mx-auto w-full">
        <Link to="/">
          <TwitterLogo />
        </Link>

        <div className="flex gap-x-3">
          {unprotectedRoutes.map((route) => (
            <NavLink key={route.to} to={route.to} className="text-white hover:text-tw-light-gray">
              {route.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar;