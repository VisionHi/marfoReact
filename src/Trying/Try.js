import React from 'react';



const Try = (props) => {
  
    const color = [
        {
            id: 'xekare',

            title: 'rad red',
            rating: 3
        },

        {
            id: 'jbwsof',
            title: 'big blue',
            rating:2
        }
    ]
    return (
        <div>
            <p> i m almost der{props.name} </p>
           <h1>{color.id} </h1>
        </div>
    )
}





export default Try;