import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}


class Starter extends React.Component {
  constructor(props) {
    super(props);
   }

  changeText(){
    var a1 = document.getElementById("a1");
    if (a1.innerHTML == '?')
	a1.innerHTML = 'a';
    else {
	a1.innerHTML = '?';
    }
    
  }
  changeTexta2(){
    var a2 = document.getElementById("a2");
    if (a2.innerHTML == '?')
        a2.innerHTML = 'c';
    else {
        a2.innerHTML = '?';
    }  
  }

  changeTexta3(){
    var a3 = document.getElementById("a3");
    if (a3.innerHTML == '?')
        a3.innerHTML = 'd';
    else {
        a3.innerHTML = '?';
    }  
  }

changeTexta4(){
    var a4 = document.getElementById("a4");
    if (a4.innerHTML == '?')
        a4.innerHTML = 'f';
    else {
        a4.innerHTML = '?';
    }  
  }
  
  render() {
    let a1 =
<div className = "col-3">
   <div className = "card">
	<button id="a1" onClick={this.changeText}>?</button>
   </div>
</div>;

    let a2 =
<div className = "col-3">
   <div className = "card">
	<button id="a2" onClick={this.changeTexta2}>?</button>
   </div>
</div>;

    let a3 =
<div className = "col-3">
   <div className = "card">
	   <button id="a3" onClick={this.changeTexta3}>?</button>
   </div>
</div>;

    let a4 =
<div className = "col-3">
   <div className = "card">
	   <button id="a4" onClick={this.changeTexta4}>?</button>
   </div>
</div>;

    let b1 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let b2 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let b3 =
<div className = "col-3">
   <div className = "card">
	  <button>?</button>
   </div>
</div>;
    
    let b4 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let c1 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let c2 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let c3 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let c4 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let d1 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let d2 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let d3 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let d4 =
<div className = "col-3">
   <div className = "card">
	   <button>?</button>
   </div>
</div>;

    let score =
<div className = "col-6">
   <p> Score: </p>
</div>;

    let restart =
<div className = "col-6">
    <button id="restart">Restart</button>
</div>;

   
     return <div className="row">
       
	{a1}{a2}{a3}{a4}{b1}{b2}{b3}{b4}{c1}{c2}{c3}{c4}{d1}{d2}{d3}{d4}{score}{restart}
	
     </div>;

 

  }
}

