import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Try from './Trying/Try';
import Menu from './Trying/Menu';



import { BrowserRouter, Route } from "react-router-dom";


const newAp = () => {
  return (
    <div>
    <p>Have done itn</p>
    </div>
  );
}


class App extends Component {
   //state is a built in function use to set th state
  state = {
      //create an array of persons
    persons: [
      { name: 'Marfo', age: 16 },
      { name: 'Boadua Richeal', age: 1 },
      { name: 'Richard' , age:Math.floor( Math.random()*30  ) }
    ]

  }

  switchNameHandler = (newname) => {
   // console.log('was clicked!');
    // manipulate the state///
    // Dont do this : this.state.persons[0].name = 'maxwel;
    this.setState({
        persons: [
      { name: newname, age: 16 },
      { name: 'Boadua Richeal', age: 23 },
      { name: 'Richard' , age:Math.floor( Math.random()*30  ) }
    ]
     }) 
  }
  
  nameChangeHandler=(event)=> {
          this.setState({
        persons: [
      { name: 'Max!', age: 16 },
      { name: event.target.value, age: 23 },
      { name: 'Richard' , age:Math.floor( Math.random()*30  ) }
    ]
     }) 
  
  }

  render() {
    return (

     <BrowserRouter>
      <div className="App">
        
          <Try name='Marfo Richard' ></Try>
          
    
          <Route path="/new" component={newAp}/>
      
      


        <h1>Am the best react programa</h1>
        <p>Thi is working now</p>
        <button className="btn btn-success"  onClick={this.switchNameHandler.bind(this, 'Daughter') } > Switch Name</button>
        <Person name={this.state.persons[0].name } age={this.state.persons[0].age}>How long have u learn</Person>
         <Person name ={this.state.persons[1].name } age={this.state.persons[1].age }  click={this.switchNameHandler.bind(this, 'Rita Agyeiwaa') } changed={this.nameChangeHandler} >Never give up</Person>
       <Person name={this.state.persons[2].name }  age={this.state.persons[2].age }  >i learn react always</Person>
          

          {/* Codes for Menu component */}
         
         
            <div className="react-container" >
       
        </div> 
        </div>
        
        </BrowserRouter>
     
    );
  }
}

//trying recipt


export default App;
