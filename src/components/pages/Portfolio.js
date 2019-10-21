import React from "react";
import Jumbotron from "../layout/Jumbotron";
import Project_Dream_Journal from "./Project_Dream_Journal";
import { rContext_ShowMore } from "../../App";



function Portfolio () {
    const doShowMore = React.useContext(rContext_ShowMore).doShowMore;
    //let setShowMoreX = React.useContext(rContext_ShowMore).setShowMore;
      return (
        <div>
            <Jumbotron />
            {doShowMore ?             
                Project_Dream_Journal()   
            : null }
        </div>
    )
}

export default Portfolio;