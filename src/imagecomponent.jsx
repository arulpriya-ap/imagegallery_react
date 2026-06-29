import "./index.css"
import animal1 from "./assets/images/animal1.jpg"


function Imagecards(props){
    return(
        <div className="container">
        
                <div className="imagecard">
                    <img className="image" src={props.image}></img>
                    <h2>{props.animalname}</h2>
                    <p>{props.description}</p>
                </div>
        
        </div>
    )

}

export default Imagecards