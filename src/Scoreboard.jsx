


export default function Scoreboard(props) {

    return(
        <div id="scoreboard">
            <h2>Current score: {props.currentScore}</h2>
            <h2>Best score: {props.bestScore}</h2>
        </div>
    )
}