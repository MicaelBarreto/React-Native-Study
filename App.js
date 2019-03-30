import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './src/components/Simple';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>
          <Simples text = 'My '/>
          App
        </Text>
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
