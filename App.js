import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="First Goal" style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Add" color="deeppink" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'darkslategrey', 
    borderBottomWidth: 0.5, 
    color: 'darkslategrey', 
    flex: 2
  },
  buttonContainer: {
    flex: 1
  }
})
