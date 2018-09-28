import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root, );
}


class Starter extends React.Component {
  constructor(props) {
    super(props);
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.state = {tablero: this.createBoard()}   

  };

createBoard(letters){
    let list = [];

    let completeList = _.shuffle(_.concat(this.letters, this.letters));
    for(let i=0; i<16; i++){ 
        var card =  {
          value: completeList[i],
          flipped: false
        }
        list.push(card);
     console.log(list);
    }
    return list;
}

 
  render() {

     let tablero =_.map(this.state.completeList, card => {
	return <Card data={card}/>;
     });
     console.log(tablero);

     
     return <div className="row">
	 <button id="restart">Restart</button>
         <p id="score"> Score: </p>
         {tablero} 
     </div>;

  }

}

function Card(props){
    if(!props.flipped) 
	{return <button>?</button>;}
}





