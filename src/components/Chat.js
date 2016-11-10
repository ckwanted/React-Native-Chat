import React, { Component, PropTypes } from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends Component {

  static propTypes = {
    name: React.PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }

  componentWillUnmount() {
    Backend.closeChat();
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.name
        }}
      />
    );
  }

}

export { Chat };
