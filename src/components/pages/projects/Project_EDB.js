import React from "react";

function Project_EDB () {
    return (
        <div>
            <h1>Eat-Da-Burger</h1>
            <p>
            </p>
            {/* <p>The Game: <a href=" https://mugwumper.github.io/GifTastic/" target="_blank"  rel="noopener noreferrer">GifTastic</a></p>
            <p>The Code: <a href="https://github.com/Mugwumper/GifTastic" target="_blank"  rel="noopener noreferrer">GifTastic</a></p> */}
            <p>The Video: <a href={process.env.PUBLIC_URL + "/images/Eat-Da-Burger.mp4"} target="_blank"  rel="noopener noreferrer">mp4</a></p>
        </div>
    )
}

export default Project_EDB;