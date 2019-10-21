import React, { useState, useCallback, useRef } from "react";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
//import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import { Col } from "./bootstrap-component.jsx";
import { rContext_ShowMore } from "../../App";

//const styles = { height: 400, width: "100%" };
//const icon_glass = <span className="glyphicon glyphicon-glass" />;
//const icon_music = <span className="glyphicon glyphicon-music" />;

// for original source see the following: 
//https://github.com/skycloud1030/react-bootstrap-carousel/blob/gh-pages/app/demoV4.jsx


function Jumbotron() {
  //const doShowMore = React.useContext(rContext_ShowMore).doShowMore;
  let localsetShowMoreX = React.useContext(rContext_ShowMore).setShowMoreX;
  const [autoplay, setAutoplay] = useState(true);
  const [wasClicked, setWasClicked] = useState(false);
  const [showMore, setShowMore] = useState(false);
  //const [icon, setIcon] = useState({});
  const [icon] = useState({});
  const slider_ref = useRef(null);
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active}  - direction=${direction}`);
    setShowMore(true);
    localsetShowMoreX({current: active, show: false});
    }, [localsetShowMoreX]);
  React.useEffect(() => {
    console.log("React.useEffect");
    if (wasClicked) {
        console.log("wasClicked: " + wasClicked);
        setShowMore(true);
        //localsetShowMoreX(false);
        setWasClicked(false);
      }
  }, [wasClicked, showMore, localsetShowMoreX]);

  function handleClicked(event) {
    setWasClicked(true);
  }

  function clickToLearnMore_dj() {
    console.log("clickToLearnMore_dj");
    localsetShowMoreX({current: 0, show: true});
  }
  function clickToLearnMore_gt() {
    console.log("clickToLearnMore_gt");
    localsetShowMoreX({current: 1, show: true});
  }
  function clickToLearnMore_cg() {
    console.log("clickToLearnMore_cg");
    localsetShowMoreX({current: 2, show: true});
  }

  return (
    <div className="container-fluid" style={{ paddingBottom: 20 }} onClick={handleClicked}>
      <Col span={12} style={{ marginTop: 20 }}>
      <RBCarousel
                  animation={true}
                  autoplay={autoplay}
                  slideshowSpeed={2000}
                  defaultActiveIndex={0}
                  leftIcon={icon.leftIcon}
                  rightIcon={icon.rightIcon}
                  onSelect={_onSelect}
                  ref={slider_ref}
                  version={4}
      >
      <div  
            style={{ height: 400 }}
            onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "/Dream Journal Jumbotron.png"} 
            alt="Dream Journal"
          />
          <div onClick={clickToLearnMore_dj} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
            onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_GifTastic.png"}
            alt="Giff Tastic"
          />
          <div onClick={clickToLearnMore_gt} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_CG.png"}
            alt="Crysal Game"
          />
          <div onClick={clickToLearnMore_cg} className="carousel-caption">Click to learn more</div>
      </div>
    </RBCarousel>
    </Col>
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