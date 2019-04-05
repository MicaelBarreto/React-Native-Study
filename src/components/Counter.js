import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Counter extends Component{
    state = {
        number: 0
    }

    reset = () => {
        this.setState({ number: 0 });
    }

    increment = () => {
        this.setState({ number: this.state.number + 1 });
    }

    render() {
        return (
            <View>
                <Text style={{fontSize:50}}>{this.state.number}</Text>
                <TouchableHighlight onPress={this.increment} onLongPress={this.reset} >
                    <Text>Increment/Reset</Text>
                </TouchableHighlight>
            </View>
        )
    }
}