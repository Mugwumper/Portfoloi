import React from "react";

function Project_CG () {
    return (
        <div>
            <h1>Clicky-Game</h1>
            <p>
            </p>
            <p>The Game: <a href="https://serene-citadel-86482.herokuapp.com/" target="_blank"  rel="noopener noreferrer">Clicky Game</a></p>
            <p>The Code: <a href="https://github.com/Mugwumper/clicky-game" target="_blank"  rel="noopener noreferrer">clicky-game</a></p>
            <p>The Video: <a href={process.env.PUBLIC_URL + "/images/clicky-game.mp4"} target="_blank"  rel="noopener noreferrer">mp4</a></p>
          
        </div>
    )
}

export default Project_CG;