import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function JumbotronSlide(_autoplay, imgsrc, alttext) {

  return (
      <div  
            style={{ height: 400 }}
            onClick={_autoplay}>

                it can't be this easy
          <img
            style={{ width: "100%", height: "100%" }}
            src={imgsrc} 
            alt={alttext}
          />
          {/* <div onClick={() => clickToLearnMore(0)} className="carousel-caption">Click to learn more</div> */}
      </div>
  );
}

export default JumbotronSlide;
