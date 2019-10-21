import React from "react";
import Jumbotron from "../layout/Jumbotron";
import Project_Dream_Journal from "./Project_Dream_Journal";
import Project_Crystal_Game from "./Project_Crystal_Game";
import Project_GifTastic from "./Project_GifTastic";
import { rContext_ShowMore } from "../../App";

function Portfolio () {
    console.log(React.useContext(rContext_ShowMore).doShowMore);
    const show = React.useContext(rContext_ShowMore).doShowMore.show;
    const current = React.useContext(rContext_ShowMore).doShowMore.current;
    const show_dj = (show && (current === 0));
    const show_gt = (show && (current === 1));
    const show_cg = (show && (current === 2));
    //let setShowMoreX = React.useContext(rContext_ShowMore).setShowMore;
      return (
        <div>
            <Jumbotron />
            {show_dj ?             
                Project_Dream_Journal()   
            : null }
            {show_gt ?             
                Project_GifTastic()   
            : null }
            {show_cg ?             
                Project_Crystal_Game()   
            : null }
        </div>
    )
}

export default Portfolio;