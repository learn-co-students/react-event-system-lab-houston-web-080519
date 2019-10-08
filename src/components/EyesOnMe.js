import React from 'react'

class EyesOnMe extends React.Component {

 

    render(){
        return(
            <div>
                <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>
                    Click Me!
                </button>
            </div>
        )
    }
}

export default EyesOnMe
