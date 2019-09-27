/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native'
import MessageItem from '../../components/MessageItem/MessageItem';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

class Chat extends React.Component {

  render() {
    return (
      <>
        <View style={styles.container}>
          <MessageItem />
          <MessageItem
            text='salaam'
          />
          <MessageItem
            text='salaam'
            iAmSender={true}
          />
          <MessageItem
            text='salaam'
          />
          <MessageItem
            text='salaam'
          />
          <MessageItem
            text='salaam'
            iAmSender={true}
          />
          <MessageItem
            text='salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam salaam '
          />
          <MessageItem
            text='salaam'
          />
          <MessageItem
            text='salaam'
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.searchBoxInput}
              placeholder='Write a message...'
            ></TextInput>
            <CustomButton
              backgroundColor='#fff4'
            >Send</CustomButton>
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    paddingHorizontal: 5
  },
  inputContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4ea9b7',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchBoxInput: {
    width: '80%',
    height: 50,
    borderRadius: 50,
    color: '#555',
    backgroundColor: '#fffa',
    paddingLeft: 10
  },
});

export default Chat;
