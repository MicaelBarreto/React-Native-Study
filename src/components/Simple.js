import React from 'react';
import { Text } from 'react-native';
import Major from '../styles/Major';

export default props => 
    <Text style={[Major.ex]}>{props.text}</Text>;

//export default function(props){
//    return <Text>{props.text}</Text>
//}