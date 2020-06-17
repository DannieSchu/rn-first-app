import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = ({ onPress }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const inputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Learning Goal"
        style={styles.input}
        onChangeText={inputHandler}
        value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Add"
          color="deeppink"
          onPress={() => onPress(enteredGoal)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  },
})

export default GoalInput
