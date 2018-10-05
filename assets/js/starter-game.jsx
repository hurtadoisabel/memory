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
    let list = [];
    this.state = {
	    letters,
	    tablero: this.createBoard(letters),
    	    list,
    	    clicks:0
    };   

  }

	counterScore(i){
		this.setState(
			{clicks: this.state.clicks +1}
		)
		let newTablero = Array.from(Object.create(this.state.tablero));
		newTablero[i].flipped = true;
		this.setState({tablero: newTablero});
	}

createBoard(letters){
    let list = [];
    let completeList = [];
    completeList = _.shuffle(_.concat(letters, letters));
    for(let i=0; i<16; i++){ 
        var card =  {
	  index: i,	
          value: completeList[i],
          flipped: false
        }
        list.push(card);
    }
    return list;
}

 
  render() {

     let tablero =_.map(this.state.tablero, (card, i) => {
	return <Card key={i} onClick={this.counterScore.bind(this, i)} value={card}/>;
     });
     let restart = <div className = "column">
		  <p><button className = "restart"> RESTART </button></p>
		  </div>
     return <div>
		  <div className = "borad">{tablero}</div>
		  </div>
		 <p> Score: {this.state.clicks}</p>
		  {restart}
	  </div>
</div>;
	 }
}

function Card(props){
    if(!props.value.flipped) 
	{return <button className = "cards" onClick={props.onClick}>?</button>;}
    if(props.value.flipped){
	    return <button className = "cards" onClick={props.onClick}>{props.value.value}</button>
    }
}





