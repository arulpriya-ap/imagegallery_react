import React from "react";
import ReactDom  from "react-dom/client"
import "./index.css"
import Header from "./header";
import Imagecards from "./imagecomponent";

const root = ReactDom.createRoot(document.getElementById("root"))

import animal1 from "./assets/images/animal1.jpg"
import animal2 from "./assets/images/animal2.jpg"
import animal3 from "./assets/images/animal3.jpg"
import animal4 from "./assets/images/animal4.jpg"
import animal5 from "./assets/images/animal5.jpg"
import animal6 from "./assets/images/animal6.jpg"
import animal7 from "./assets/images/animal7.jpg"
import animal8 from "./assets/images/animal8.jpg"
import animal9 from "./assets/images/animal9.jpg"
import animal10 from "./assets/images/animal10.jpg"
import animal11 from "./assets/images/animal11.jpg"
import animal12 from "./assets/images/animal12.jpg"
import animal13 from "./assets/images/animal13.jpg"
import animal14 from "./assets/images/animal14.jpg"
import animal15 from "./assets/images/animal15.jpg"
import animal16 from "./assets/images/animal16.jpg"

let imageCardList = [
  {
    image: animal1,
    animal: "Lion",
    description: "The lion is known as the King of the Jungle."
  },
  {
    image: animal2,
    animal: "Cheetah",
    description: "The fastest land animal."
  },
  {
    image: animal3,
    animal: "Gorilla",
    description: "Tropical forests of Central Africa."
  },
  {
    image: animal4,
    animal: "Fox",
    description: "Stealthy hunter with sharp senses."
  },
  {
    image: animal5,
    animal: "Kangaroo",
    description: "Powerful jumper with protective pouch."
  },
  {
    image: animal6,
    animal: "Deer",
    description: "Swift, elegant, peaceful woodland creature."
  },
  {
    image: animal7,
    animal: "Elephant",
    description: "Largest land animal with trunk."
  },
  
  {
    image: animal8,
    animal: "Tiger",
    description: "Powerful predator with striking stripes."
  },
  {
    image: animal9,
    animal: "Monkey",
    description: "Playful primate with curious nature."
  },
  {
    image: animal10,
    animal: "Snake",
    description: "Slithering reptile with silent movements."
  },
  {
    image: animal11,
    animal: "Crocodile",
    description: "Powerful reptile with crushing jaws."
  },
  {
    image: animal12,
    animal: "Zebra",
    description: "Striped herbivore roaming African grasslands."
  },
  {
    image: animal13,
    animal: "Eagle",
    description: "Fearless hunter soaring high skies."
  },
  {
    image: animal14,
    animal: "Peacock",
    description: "Colorful bird displaying magnificent feathers."
  },
  {
    image: animal15,
    animal: "Rhinoceros",
    description: "Massive herbivore with powerful horn."
  },
  {
    image: animal16,
    animal: "Bear",
    description: "Powerful omnivore living forest habitats."
  }
]
root.render(
  <div>
     <Header></Header>
     <div className="imagecontainer">
     {
      imageCardList.map(function(item){
        return <Imagecards image = {item.image} animalname = {item.animal} description = {item.description}></Imagecards>
      })
     }
     </div>
  </div>
 
)