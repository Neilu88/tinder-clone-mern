import ReplayIcon from "@mui/icons-material/Replay"
import CloseIcon from "@mui/icons-material/Close"
import StarRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import { IconButton } from "@mui/material"

const Buttons = () => {
  return (
    <div className="fixed w-full bottom-20 flex justify-evenly items-center">
      <IconButton className="bg-white !shadow-lg">
        <ReplayIcon className="text-green-500 p-1" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white !shadow-lg">
        <CloseIcon className="text-black p-1" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white !shadow-lg">
        <StarRateIcon className="text-blue-500 p-1" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white !shadow-lg">
        <FavoriteIcon className="text-red-500 p-1" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white !shadow-lg">
        <FlashOnIcon className="text-yellow-500 p-1" fontSize="large" />
      </IconButton>
    </div>
  )
}
export default Buttons
