import React from 'react';
import { View, Text } from 'react-native';
import Major from '../styles/Major';

function evenOdd(num){
    if(num % 2 == 0){
        return <Text style={Major.ex}>Even</Text>;
    }else{
        return <Text style={Major.ex}>Odd</Text>;
    }
}

export default props =>
    <View>
        {evenOdd(props.number)}
        {
            //props.number % 2 == 0 ? <Text style={Major.ex}>Even</Text> : <Text style={Major.ex}>Odd</Text>
        }
    </View>