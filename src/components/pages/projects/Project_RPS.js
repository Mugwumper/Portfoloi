import React from "react";

function Project_RPS () {
    return (
        <div>
            <h1>Rock Paper Scissors - Multiplayer</h1>
            <p>
            <h2>Description</h2>
            <p>This game can be used by two people (or two instances on one machine). It uses Firebase to track each player’s selection. It will keep a running score as well.</p>
            <p>Beyond the assignment’s requirements I’ve added a few things.</p>
            <h5>1 - Player’s Name</h5>
            <p>The ability to give each player a name. This appears on both screens and makes it clear who you are playing against.</p>
            <h5>2 - Status</h5>
            <p>As each player is making a selection the status is relayed to the other player. In other words you will know if your opponent is waiting on you or if you are waiting on them.</p>
            <h5>3 - Control Panel</h5>
            <p>Admittedly this is used more for my own debugging but it does offer a place where user name can be entered. Control panel is accessable by clicking on the gear icon in the upper left.</p>
            <h4>Bugs:</h4>
            <p>There is an issue where at times the both instances appear as ‘Player 2’. To work around this I’ve added the ability to ‘Force this to be Player 1’ in the control panel.</p>
            <h2>Technoligies:</h2>
            <ul>
            <li>Firebase Database</li>
            <li>JQuery</li>
            </ul>
            </p>
            <p>The Game: <a href="https://mugwumper.github.io/RPS-Multiplayer/" target="_blank"  rel="noopener noreferrer">Rock Paper Scissors - Multiplayer</a></p>
            <p>The Code: <a href="https://github.com/Mugwumper/RPS-Multiplayer" target="_blank"  rel="noopener noreferrer">RPS-Multiplayer</a></p>
        </div>
    )
}

export default Project_RPS;