import React, { useState, useCallback, useRef } from "react";

//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

//const styles = { height: 400, width: "100%" };
//const icon_glass = <span className="glyphicon glyphicon-glass" />;
//const icon_music = <span className="glyphicon glyphicon-music" />;

function Jumbotron() {
  const [autoplay, setAutoplay] = useState(true);
  //const [icon, setIcon] = useState({});
  const [icon] = useState({});
  const slider_ref = useRef(null);
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`);

  }, []);
  // const _changeIcon = useCallback(() => {
  //   // Icon Switch
  //   setIcon(({ leftIcon, rightIcon }) => {
  //     leftIcon = leftIcon ? undefined : icon_glass;
  //     rightIcon = rightIcon ? undefined : icon_music;
  //     return { leftIcon: leftIcon, rightIcon: rightIcon };
  //   });
  // }, []);
  return (
    <div className="container-fluid" style={{ paddingBottom: 20 }}>

      <RBCarousel
        animation={true}
        autoplay={autoplay}
        slideshowSpeed={2000}
        defaultActiveIndex={0}
        leftIcon={icon.leftIcon}
        rightIcon={icon.rightIcon}
        onSelect={_onSelect}
        ref={slider_ref}
      >
      <div  className="JItem_Dream" 
            style={{ height: 400 }}
            //onClick={() => stopAndShow("DreamJournal", RBCarousel.autoplay)}>>
            onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "/Dream Journal Jumbotron.png"} 
            alt="Dream Journal"
          />
          <div className="carousel-caption">Click to learn more</div>
      </div>
      <div style={{ height: 400 }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://www.w3schools.com/bootstrap/ny.jpg"
            alt="project X"
          />
          <div className="carousel-caption">Click to learn more</div>
      </div>
    </RBCarousel>
    </div>
  );
}

// const stopAndShow = selectedPage => {
//   console.log("stopping and showing this page: " + selectedPage);
//   if (selectedPage === "DreamJournal") {
//     _autoplay;
//   }
// };

export default Jumbotron;
// This code is based on this:
//https://github.com/skycloud1030/react-bootstrap-carousel/blob/gh-pages/app/demoV3.jsx