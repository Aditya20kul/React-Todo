import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    }
  }

  addItem(todoValue){
    if( todoValue !== "" ){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list]
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list]
    const updatedList = list.filter(item=>item.id !== id);
    this.setState({list: updatedList})
  }

  updatedList(input){
    this.setState({newItem:input});
  }


  render(){
    return (
      <div>
        {/* <img src={logo} width="100" height="100" ClassName="logo" alt="logo"/> */}
        <h1 className="app-title">Todo List</h1>
        <div className="container">
          Add an Item ...
          <br/>
          <input 
          type="text"
          className="input-text"
          placeholder="Add an Item"
          required
          value={this.state.newItem}
          onChange={e => this.updatedList(e.target.value)}
          />
          <button className="add-btn"
          onClick={()=>this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          <div className="list">
            <ul className="ls">
              {this.state.list.map(item => {
                return(
                  <li className="todos" key={item.id}>
                    <span className="todo-name"><input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={()=>{}}
                    />{item.value}</span>
                    
                    <button className="btn-delete" onClick={()=> this.deleteItem(item.id)}>Delete Todo</button>
                  </li>
                );
              })}
              {/* <li className="todos">
                
                <span className="todo-name"> <input type="checkbox" name="" id=""/>Record Youtube Videos</span>
                <button className="btn-delete">Delete Todo</button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;