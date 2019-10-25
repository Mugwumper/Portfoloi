import React, { useState, useCallback, useRef } from "react";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
//import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import { Col } from "./bootstrap-component.jsx";
import { rContext_ShowMore } from "../../App";
//import JumbotronSlide from "./JumbotronSlide";

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

  function clickToLearnMore(index) {
    console.log("clickToLearnMore");
    localsetShowMoreX({current: index, show: true});
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
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/Dream Journal Jumbotron.png"} 
            alt="Dream Journal"
          />
          <div onClick={() => clickToLearnMore(0)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
            onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_GifTastic.png"}
            alt="Giff Tastic"
          />
          <div onClick={() => clickToLearnMore(1)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_CG.png"}
            alt="Crysal Game"
          />
          <div onClick={() => clickToLearnMore(2)} className="carousel-caption">Click to learn more</div>
      </div>      
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)"}}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_RPS.png"}
            alt="Rock Paper Siccors - Multiplayer"
          />
          <div onClick={() => clickToLearnMore(3)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_WGG.png"}
            alt="Word Guess Game"
          />
          <div onClick={() => clickToLearnMore(4)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_FF.png"}
            alt="Friend Finder"
          />
          <div onClick={() => clickToLearnMore(5)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_Bam.png"}
            alt="Bamazon"
          />
          <div onClick={() => clickToLearnMore(6)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_TG.png"}
            alt="Trivia Game"
          />
          <div onClick={() => clickToLearnMore(7)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_Liri.png"}
            alt="Liri"
          />
          <div onClick={() => clickToLearnMore(8)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_EDB.png"}
            alt="Eat-Da-Burger"
          />
          <div onClick={() => clickToLearnMore(9)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_MS.png"}
            alt="Mongo Scraper"
          />
          <div onClick={() => clickToLearnMore(10)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_Pup.png"}
            alt="Pupster"
          />
          <div onClick={() => clickToLearnMore(11)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_CyG.png"}
            alt="Clicky Game"
          />
          <div onClick={() => clickToLearnMore(12)} className="carousel-caption">Click to learn more</div>
      </div>
      <div 
           style={{ height: 400 }}
           onClick={_autoplay}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(50%)" }}
            src={process.env.PUBLIC_URL + "/images/Jumbotron_FRH.png"}
            alt="Family Reunion Helper"
          />
          <div onClick={() => clickToLearnMore(13)} className="carousel-caption">Click to learn more</div>
      </div>
      </RBCarousel>
    </Col>
    </div>
  );
}

export default Jumbotron;