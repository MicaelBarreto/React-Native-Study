import React from 'react';
import { Text } from 'react-native';
import Major from '../styles/Major';

export const Reverse = props => {
    const rev = props.text.split('').reverse().join('');
    return <Text style={Major.ex}>{rev}</Text>;
}

export const Random = props => {
    const [min, max] = [1, 60];
    const numbers = Array(props.numbers || 5);

    for(let i = 0; i<numbers.length; i++){
        newer = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers[i] = newer;
    }

    numbers.sort((a, b) => a - b);
    return <Text style={Major.ex}>{numbers.join(', ')}</Text>
}