import React, { Component } from 'react'

export class EyesOnMe extends Component {

    goodFocus = () => {
        console.log('Good!')
    }

    myEyes = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <div>
             <button onFocus={this.goodFocus} onBlur={this.myEyes}/>
            </div>
        )
    }
}

export default EyesOnMe
