import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    render() {
        return (
            <button type="button" onFocus={()=> console.log('Good!')} onBlur={()=> console.log('Hey! Eyes on me!')}>Click Me!</button>
        )
    }

}
