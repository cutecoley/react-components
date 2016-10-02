class GroceryListentry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      	done: false
    };
    }
  
	onListItemClick(event) {
		console.log()
		console.log('I got clicked ' + event.target.textContent);
		this.setState({
      		done: !this.state.done
    		});
		console.log('done: ', this.state.done)
		};
  	
	render () {
	  	return (<div>  
	      <li onClick = {this.onListItemClick.bind(this)}>{this.props.item}</li>  
	    	</div>
		);
  }

}

window.GroceryListentry = GroceryListentry;