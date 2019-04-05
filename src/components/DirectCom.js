import React, { Component } from 'react';
import { View, Text } from 'react-native';

const font = { style: { fontSize:30 } }

function propsChildren(props){
    return React.Children.map(props.children,
            c => React.cloneElement(c, {...props, ...c.props}));
}

export const Son = props =>
    <View>
        <Text {...font}>Son: {props.name} {props.surname}</Text>
    </View>

export const Father = props =>
    <View>
        <Text {...font}>Father: {props.name} {props.surname}</Text>
        {propsChildren(props)}
    </View>

export const Grandfather = props =>
    <View>
        <Text {...font}>Grandfather: {props.name} {props.surname}</Text>
        <Father name='Rubens' surname='Moraes'>
            <Son name='Micael' />
            <Son name='Debora' />
        </Father>
        <Father {...props} name='Peter' surname={props.surname}>
            <Son name='David' />
            <Son name='Mary' />
        </Father>
    </View>

export default Grandfather