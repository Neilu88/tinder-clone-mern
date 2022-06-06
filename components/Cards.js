import { SwipeDown } from "@mui/icons-material"
import { useState } from "react"
import TinderCard from "react-tinder-card"

const Cards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile.jpg",
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nametoDelete)
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
              style={{ backgroundImage: `url(${person.url})` }}
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
