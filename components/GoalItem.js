import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ title }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'darkseagreen',
    padding: 10,
    marginTop: 15,
    borderRadius: 8
  },
  text: {
    color: 'white'
  }
});

export default GoalItem

