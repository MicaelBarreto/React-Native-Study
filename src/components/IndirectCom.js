import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Major from '../styles/Major'

export const In = props =>
    <View>
        <TextInput value={props.text}
            style={Major.input}
            onChangeText={props.callOnChange} />
    </View>

export default class SyncText extends Component{
    state ={
        text: ''
    };

    changeText = text =>{
        this.setState({ text })
    }

    render (){
        return(
            <View>
                <Text style={Major.font}>{this.state.text}</Text>
                <In text={this.state.text}
                    callOnChange={this.changeText}/>
            </View>
        );
    }
}