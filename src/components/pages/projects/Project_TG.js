import React from "react";

function Project_TG () {
    return (
        <div>
            <h1>Trivia Game</h1>
            <h2>Description</h2>
            <p>This game demonstrates the use of timers to manage each question and anwer's visibility. This is the more advanced assignment (of the two options) as it contains one question at a time with a persistent score that is shown at the end of the quiz. 

            The final screen, shows the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
            </p>
            <h3>Technologies</h3>
            <ul>
            <li>JQuery</li>
            <li>Javascript</li>
            </ul>
            <h2>Links</h2>
            <p>The Game: <a href="https://mugwumper.github.io/TriviaGame/" target="_blank"  rel="noopener noreferrer">GifTastic</a></p>
            <p>The Code: <a href="https://github.com/Mugwumper/TriviaGame" target="_blank"  rel="noopener noreferrer">GitHub Code</a></p>
            <p>The Video: <a href={process.env.PUBLIC_URL + "/images/Trivia_Game.mp4"} target="_blank"  rel="noopener noreferrer">mp4</a></p>
        </div>
    )
}

export default Project_TG;