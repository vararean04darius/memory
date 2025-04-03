
export default function Playcard(props) {

    return(
        <div className="playcard" onClick={() => {props.shuffleArray()}}>{props.item}</div>
    )
}