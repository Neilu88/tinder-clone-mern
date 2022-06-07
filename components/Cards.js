import { SwipeDown } from "@mui/icons-material"
import { useEffect, useState } from "react"
import TinderCard from "react-tinder-card"
import axios from "./axios"

const Cards = () => {
  const [people, setPeople] = useState([])
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/card")

      setPeople(req.data)
    }
    fetchData()
  }, [])

  const swiped = (direction) => {
    console.log("removing")
    //setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!")
  }

  return (
    <div className="">
      <div className="flex items-center justify-center mt-80">
        {people.map((person) => (
          <TinderCard
            className="swipe absolute"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="relative rounded-2xl bg-cover bg-white w-[600px] p-5 max-w-[85vh] h-[50vh] !shadow-2xl bg-center"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3 className="font-semibold absolute bottom-0 m-2.5 text-white">
                {person.name}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}
export default Cards
