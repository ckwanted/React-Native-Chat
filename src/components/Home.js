import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeholder="John Snow"
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />
      <TouchableOpacity
        onPress={() => {
          if(this.state.name.trim().length) {
            Actions.chat({
              name: this.state.name
            });
          }
        }}
      >
        <Text style={styles.btnText}>
          Enter
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    paddingLeft: 10
  },
  btnText: {
    backgroundColor: '#DDD',
    textAlign: 'center',
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20
  }
});

export { Home };
