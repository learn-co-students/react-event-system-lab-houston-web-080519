// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component{

    render(){
        
        return <div>
            
            
            <input type='password' onKeyUp = {() => console.log("Entering password...")}/>
            
            
            
            </div>
        
    }
}

export default Keypad;


// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.