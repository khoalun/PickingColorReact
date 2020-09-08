import React, { Component } from 'react';


class Reset extends Component {


    constructor(props) {
        super(props);
        this.state = {
            default : {
                color : 'red',
                size : 12 


            }
        };
    }
    onReset = ()  => {
        this.props.onReset(this.state.default) ;
    }
    
    render () {
        return (
        <button type="button" className="btn btn-default" onClick= {this.onReset} >Reset Button</button>

        );
    }

}


export default Reset;