import React from 'react';
import ReactDOM from 'react-dom';

export default function memory_init(root) {
   ReactDOM.render(<Memory />, root);
}



class Memory extends React.Component {
   constructor(props) {
	super(props);
	this.state = {
	   clicks: "",
	};
   }

   render() {
	return <div>
	   <h2>Memory loaded. </h2>
	</div>;
   }
}
