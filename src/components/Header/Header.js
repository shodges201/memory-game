import React from 'react';
import './Header.css'
const Header = (props) => {
    return ( 
        <>
        <div id='background-container'>
        <div id="header-left-container" className="header-text-container">
            <h1 className="header-text" onClick={props.reload}>
                Clicky Game
            </h1>
        </div>
        <div className="header-text-container">
            <h1 className="header-text" id="header-middle-text">
                Click an image to begin
            </h1>
        </div>
        <div id="header-right-container" className="header-text-container">
            <h2 className="header-text">
                Current Score: {props.state.currentScore}
            </h2>
            <h2 id="top-score-text" className="header-text">
                Top Score: {props.state.topScore}
            </h2>
        </div>
    </div>
    <div id="buffer">
        <h1 id="buffer-header">Memory Game</h1>
        <h3 id="buffer-description-text">Click on an image to earn points, but don't click on any item more than once!</h3>
    </div>
    </>
     );
}
export default Header;