import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Major from '../styles/Major';

export default class Event extends Component{
    state = {
        text: ''
    };

    textChange = text => {
        this.setState({ text });
    }

    render() {
        return (
            <View>
                <Text style={Major.font}>{this.state.text}</Text>
                <TextInput value={this.state.text}
                    style={Major.input}
                    onChangeText={this.textChange} />
            </View>
        );
    }
}