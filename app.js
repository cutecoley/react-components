var App = () => (
  <div>
  <div>Grocery List</div>
  <GroceryList items={['Cucumber', 'kale']}/>  

  </div>
);



ReactDOM.render(<App />, document.getElementById('app'));


window.App = App;