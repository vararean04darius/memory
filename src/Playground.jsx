import Playcard from "./Playcard";


export default function Playground(props) {
    const arr = props.cardsArray;

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
                            checkElement={props.checkElement}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}