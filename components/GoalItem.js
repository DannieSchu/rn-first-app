import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = ({ title, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.listItem}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
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
