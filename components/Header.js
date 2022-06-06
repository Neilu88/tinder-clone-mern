import PersonIcon from "@mui/icons-material/Person"
import { IconButton } from "@mui/material"
import ForumIcon from "@mui/icons-material/Forum"

const Header = () => {
  return (
    <div className="flex justify-between items-center z-100 border-b-[#f9f9f9]">
      <IconButton className="mx-5">
        <PersonIcon fontSize="large" />
      </IconButton>
      <img
        className="object-contain"
        width="150"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt="Tinder Logo"
      />
      <IconButton className="mx-5">
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header
