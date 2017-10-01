import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image } from 'react-native';



//HOMESCREEN
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state ={lobbyTextInput: ''}
  }
  // _onCreateLobby() {
  //   navigate('JukeboxScreen')
  // }
  // _onJoinLobby() {
  //   navigate('LobbyScreen')
  // }

  render() {
    return (


      <View style={styles.container}>


      <Image
          style={{width: 270, height: 200, marginBottom: 50}}
          source={{uri: 'https://i.imgur.com/JnUp8JN.png'}}
        />

        <Text style={styles.white}>Welcome to ShellTunes!</Text>
        <Text style={styles.white}>An app that lets everyone</Text>
        <Text style={styles.white}>contribute to jam sessions</Text>
        <Text style={styles.white}>without interruptions!</Text>
        <TextInput
          style={{ fontSize: 20, height: 40, width:375, borderColor:'#FFF', borderWidth: 1, borderRadius: 20, padding: 5, marginTop: 20, marginBottom: 10, color: '#FFF', textAlign: 'center', }}
          placeholder="Enter Lobby Name"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={(lobbyTextInput) => this.setState({lobbyTextInput})}
          />
          <View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight onPress={this._onJoinLobby}>
                <View>
                  <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 20 }}>Join Lobby</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight onPress={this._onCreateLobby}>
                <View>
                  <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 20 }}>Create Lobby</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>



    );
  }
}


//LOBBYSCREEN
export class LobbyScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      </View>
    );
  }
}


//JUKEBOXSCREEN
export class JukeboxScreen extends React.Component{

}

//STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20b2aa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  white: {
    color: '#FFF',
    fontSize: 30,
  },
  buttonContainer: {
    height: 40,
    width: 200,
    margin: 5,
    backgroundColor: "#ff7373",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
  },
});
