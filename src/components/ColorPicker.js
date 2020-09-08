import React, { Component } from 'react';


class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        };
    }
    setStylecolor(color) {
        return {
            backgroundColor: color
        };
    }

    onSettingColor(color) {
        this.props.onChangeColor(color);
    }

    render() {
        let NxtColors = this.state.colors.map((color, index) => {
            return <span
                key={index}
                style={this.setStyle(color)}
                onClick={() => this.onSettingColor(color)}
            ></span>
        });
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"> Color Picker </h3>
                </div>
                <div className="panel-body">
                    {NxtColors}
                </div>
            </div>
        );

    }
}




export default ColorPicker;