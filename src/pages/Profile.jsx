import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import Tabbar from "../components/Tabbar";
import Avatar from "../components/Avatar";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Avatar />
        <h1 className="font-bold text-2xl">@{user.data.username}</h1>
      </div>

      <Tabbar />
    </div>
  )
}

export default Profile