import React from 'react';
import "./App.css"
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      newItem: "",
      list :[]
    }

  }
 addItem(todovalue)
 {
   if(todovalue !="")
   {
     const newItem={
       id:Date.now(),
       value:todovalue,
       isDone: false
     };
     const list= [...this.state.list];
     list.push(newItem);
     this.setState({list, newItem:''});
   }
 }

 deleteItem(id)
 {
   const list=[...this.state.list];
   const updatelist=list.filter(item => item.id !=id);
   this.setState({list: updatelist})
 }
 updateInput(input)
 {
   this.setState({newItem:input})
 }
 

 render (){ 
  return (
    <div className="App">
        <header className="App-header">
          <h1>TODO List</h1>
        </header>
      <div>
        <h3>Add a Todo...</h3>
        <input className="todo-text" type="text" placeholder="Write a todo....."
        required
        value={this.state.newItem}
        onChange={e =>this.updateInput(e.target.value)}/>
        <button className="add-btn" 
        onClick={()=> this.addItem(this.state.newItem)}
        disabled={!this.state.newItem.length} >Add</button>
      </div>
      <center>
        <div className="list-todo">
          <ul className="list">
             {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                  <input
                   type='CheckBox'
                   name="isDone"
                   checked={item.isDone}
                   className='check-box'>
                  </input>
                  {item.value}
                  <button
                     className="delete-btn"
                    onClick={()=> this.deleteItem(item.id)}> Delete
                  </button>
                  </li>
                );
             })}
          </ul>
        </div>
      </center>
    </div>
  );
}
}
export default App;