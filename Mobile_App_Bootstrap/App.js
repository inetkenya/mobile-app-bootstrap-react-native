import React from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from './src/router';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

/*
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
