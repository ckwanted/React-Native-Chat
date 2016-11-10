import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class Chat extends Component {

  render() {
    return (
      <View>
        <Text>hello {this.props.name}</Text>
      </View>
    );
  }

}

export { Chat };
