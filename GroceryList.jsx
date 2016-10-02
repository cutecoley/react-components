var GroceryList = (props) => (
	<div>
	<ul>
	 {props.items.map(item =>
      <GroceryListentry item={item} />
    )}
	 </ul>
   </div> 
);

window.GroceryList = GroceryList;
