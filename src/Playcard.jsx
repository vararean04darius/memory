
export default function Playcard(props) {

    return(
        <div className="playcard" onClick={() => {
            props.checkElement(props.item);
            props.shuffleArray();
        }}>
            <h2>{props.item.name}</h2>
            <div className="image-container">
                <img className="image" src={props.item.url}/>
            </div>
        </div>
    )
}