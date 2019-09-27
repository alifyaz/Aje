import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import myImg from '../../assets/images/avatar.jpg'

const MessageItem = props => {
  return (
    <View style={styles.container}>
      {
        !props.iAmSender &&
        <Image source={myImg} style={styles.avatar} />
      }
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 5
  },
  messageBox: {
    backgroundColor: '#4ea9b7',
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    maxWidth: '70%',
    minHeight: 30,
    borderRadius: 15,
    borderTopStartRadius: 2
  },
  messageText: {
    color: '#eee'
  }
})

export default MessageItem
