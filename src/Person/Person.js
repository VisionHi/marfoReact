import React from 'react';

const person = (props) => { 
    return (
       //add the div in other to add more element
         <div>
        <p onClick={props.click} > I am {props.name} and i am <span className="label label-default">{props.age} years old!</span> </p>
            <h2> marfo<span className="label label-default">{props.children}</span> </h2>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>)

        
};

export default person;