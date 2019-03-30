import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './src/components/Simple';
import EvenOdd from './src/components/EvenOdd';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples text = 'The Number is'/>
        <EvenOdd number={30} />
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
