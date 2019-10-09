// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class EyesOnMe extends React.Component{
    render(){
        return <div>
            <button onFocus = {() => console.log('Good!')} onBlur = {() => console.log('Hey! Eyes on me!')}/>
        </div>
    }
}

export default EyesOnMe;