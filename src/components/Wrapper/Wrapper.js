import React from 'react';
import './Wrapper.css';
import Tile from '../Tiles/Tiles.js';
import characters from '../../characters.json';
import Header from './../Header/Header';

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = { 
            topScore: 0,
            currentScore: 0,
            characters: characters,
            alreadyChosen: []
         }
    }

    reload = () =>{
        window.location.reload();
    }

    addToScore = () => {
        let score = this.state.currentScore + 1;
        console.log(`score: ${score}`);
        if(score > this.state.topScore){
            console.log(`current score: ${score}`);
            this.setState({currentScore: score, topScore: score});
        }
        else{
            this.setState({currentScore: score});
        }
    }

    checkPick = (id) => {
        //not already chosen
        console.log(this.state.alreadyChosen);
        if(this.state.alreadyChosen.indexOf(id) === -1){
            let chosen = this.state.alreadyChosen;
            chosen.push(id);
            console.log(chosen);
            this.setState({alreadyChosen: chosen});
            this.addToScore();
            this.shuffleList(this.state.characters);
        } 
        //already chosen
        else{
            this.setState({currentScore: 0, alreadyChosen: []})
        }  
    }

    shuffleList = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        console.log(array);
        this.setState({characters: array});
      }

    render() { 
        return (
            <> 
            <Header reload={this.reload} state={this.state}/>
            <div id="tiles-container">
                {this.state.characters.map(character =>{
                    return (<Tile 
                        key={character.id} 
                        id={character.id}
                        name={character.name} 
                        img={character.img}
                        checkPick={this.checkPick}
                        />);
                })}
            </div>
            <div id="footer-container">
                <div className="footer-text-container">
                    <h3 className="footer-text">Test your memory!</h3>
                </div>
            </div>
            </>
            );
    }
}
 
export default Wrapper;