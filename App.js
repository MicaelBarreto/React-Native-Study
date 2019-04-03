import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simple from './src/components/Simple';
import EvenOdd from './src/components/EvenOdd';
import { Reverse, Random } from './src/components/Multi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simple text = 'The Number is'/>
        <EvenOdd number={30} />
        <Reverse text='React' />
        <Random numbers={5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f20: {
    fontSize: 20,
  },
});
