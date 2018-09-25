import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: false };
  }

  swap(_ev) {
    let state1 = _.assign({}, this.state, { left: !this.state.left });
    this.setState(state1);
  }

  hax(_ev) {
    alert("hax!");
  }

  clicked(_ev) {
    alert("clicked");
  }

  render() {
    let button = <div className="column" onMouseClick={this.swap.bind(this)}>
      <p><button onClick={this.clicked.bind(this)}></button></p>
    </div>;
	
    let button1 = <div className="column" onMouseClick={this.swap.bind(this)}>
      <p><button onClick={this.clicked.bind(this)}></button></p>
    </div>;

    let prueba =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square" style="background-color: grey;">
	   <p>?</p>
	</div>
   </div>
</div>;

 
    

    let blank = <div className="column">
      <p>Nothing here.</p>
    </div>;

    if (this.state.left) {
      return <div className="row">
        {button}
        {blank}
	{prueba}
	
      </div>;
    }
    else {
      return <div className="row">
        {blank}
        {button}
	{prueba}
      </div>;
    }
  }
}
