import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white}>Open up App.js to start working on your app!</Text>
        <Text style={styles.white}>Changes you make will automatically reload.</Text>
        <Text style={styles.white}>Shake your phone to open the developer menu.</Text>
        <Text style={styles.white}> Hello World </Text>
        <TextInput
          style={{height: 40, width:200, borderColor:'#FFF', borderWidth: 1, padding: 5, margin: 10, color: '#FFF', textAlign: 'center', }}
          placeholder="Type here!"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({text})}
          />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20b2aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#FFF'
  }
});
