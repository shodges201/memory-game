import React from 'react';
import './Tiles.css'

const Tile = (props) => {
    console.log(props);
    return ( 
        <div className="tile" key={props.id} name={props.name} onClick={() => props.checkPick(props.id)}>
            <img className="tile-image" src={props.img} alt="" />
        </div>
     );
}
 
export default Tile;