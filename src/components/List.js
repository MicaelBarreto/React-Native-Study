import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const students = [
    {id: 1, name:'John', grade: Math.floor(Math.random() * 10)},
    {id: 2, name:'Anne', grade: Math.floor(Math.random() * 10)},
    {id: 3, name:'Peter', grade: Math.floor(Math.random() * 10)},
    {id: 4, name:'Oliver', grade: Math.floor(Math.random() * 10)},
    {id: 5, name:'Jake', grade: Math.floor(Math.random() * 10)},
    {id: 6, name:'Jack', grade: Math.floor(Math.random() * 10)},
    {id: 7, name:'Connor', grade: Math.floor(Math.random() * 10)},
    {id: 8, name:'Harry', grade: Math.floor(Math.random() * 10)},
    {id: 9, name:'Callum', grade: Math.floor(Math.random() * 10)},
    {id: 10, name:'Margaret', grade: Math.floor(Math.random() * 10)},
    {id: 11, name:'William', grade: Math.floor(Math.random() * 10)},
    {id: 12, name:'Charlie', grade: Math.floor(Math.random() * 10)},
    {id: 13, name:'Emma', grade: Math.floor(Math.random() * 10)},
    {id: 14, name:'James', grade: Math.floor(Math.random() * 10)},
    {id: 15, name:'Alexander', grade: Math.floor(Math.random() * 10)},
    {id: 16, name:'Mary', grade: Math.floor(Math.random() * 10)},
    {id: 17, name:'Jessica', grade: Math.floor(Math.random() * 10)},
    {id: 18, name:'Sarah', grade: Math.floor(Math.random() * 10)},
    {id: 19, name:'David', grade: Math.floor(Math.random() * 10)},
    {id: 20, name:'Tracy', grade: Math.floor(Math.random() * 10)}
];

const studentStyle = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderColor: '#222',

    //Flex
    alignItems:'center',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    flexDirection: 'row'
}

const margin = {
    marginTop:20
}

export const Student = props =>
    <View style={studentStyle}>
        <Text>Name: {props.name}</Text>
        <Text>Grade: {props.grade}</Text>
    </View>

export default props => {
    const renderIntem = ({ item }) =>{
        return <Student {...item} />
    };
    return(
        <ScrollView style={margin}>
            <FlatList data={students} renderItem={renderIntem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    );
}