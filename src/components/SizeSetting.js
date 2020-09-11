import React, { Component } from 'react';

class SizeSetting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size : this.props.size
        };
        this.decSize = this.decSize.bind(this);
        this.incSize = this.incSize.bind(this);
    }

    decSize(){
        this.props.onChangeSize(-2);
    }

    incSize(){
        this.props.onChangeSize(2);
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.size}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={this.decSize} >Giảm</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={this.incSize} >Tăng</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;



