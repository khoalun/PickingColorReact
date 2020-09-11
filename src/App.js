import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color : 'red',
            fontSize : 12
        };
    }

    onChangeColor = (color) => {
        this.setState({
            color : color
        });
    }

    onChangeSize = (size) => {
        this.setState({
            fontSize : (this.state.fontSize + size >= 8 && this.state.fontSize + size <= 36 ) ? this.state.fontSize + size : this.state.fontSize
        });
    }

    onReset = (data) => {
        this.setState({
            color : data.color,
            fontSize : data.size
        });
    }

    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker onChangeColor={ this.onChangeColor } defaultColor={ this.state.color } />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting size={this.state.fontSize} onChangeSize = {this.onChangeSize} />
                        <Reset onReset={this.onReset} />
                    </div>
                    <Result color={this.state.color} fontSize={this.state.fontSize} />
                </div>
            </div>
        );
    }
}

export default App;



