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


  render() {

    let a1 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let a2 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let a3 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let a4 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let b1 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let b2 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let b3 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;
    
    let b4 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let c1 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let c2 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let c3 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let c4 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let d1 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let d2 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let d3 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

    let d4 =
<div className = "col-3">
   <div className = "square-border">
	<div className = "square">
	   <p>?</p>
	</div>
   </div>
</div>;

   
     return <div className="row">
       
	{a1}
	{a2}
	{a3}
	{a4}
	{b1}
        {b2}
        {b3}        
        {b4}
        {c1}
        {c2}
        {c3}
        {c4}
        {d1}
        {d2}
        {d3}
        {d4}

	
     </div>;


  }
}

