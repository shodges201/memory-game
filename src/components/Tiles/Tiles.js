import React from 'react';
import './Tiles.css'

const Tile = (props) => {
    console.log(props.id);
    return ( 
        <div className="tile" name={props.name} onClick={() => props.checkPick(props.id)}>
            <img className="tile-image" src={props.img} alt="" />
        </div>
     );
}
 
export default Tile;