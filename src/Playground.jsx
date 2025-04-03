import { useEffect } from "react";
import Playcard from "./Playcard";


export default function Playground(props) {

    let arr = props.cardsArray;
    
    // useEffect(() => {

    // }, [props.cardsArray])

    return(
        <div id="playground-container">
            <div id="cards-container">
            {
                arr.map((item, index) => {
                    return(
                        <Playcard
                            key={index}
                            item={item}
                            shuffleArray={props.shuffleArray}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}