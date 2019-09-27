import React from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';

const CustomButton = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.backgroundColor }]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 20
  },
  text: {
    color: '#eee'
  }
})

export default CustomButton