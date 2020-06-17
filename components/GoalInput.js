import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const inputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Learning Goal"
          style={styles.input}
          onChangeText={inputHandler}
          value={enteredGoal}
        />     
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="aquamarine"
              onPress={onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              color="deeppink"
              onPress={addGoalHandler}
            />
          </View>
        </View> 
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    width: '60%',
    borderBottomColor: 'darkslategrey',
    borderBottomWidth: 0.5,
    marginBottom: 10,
    color: 'darkslategrey'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: "space-around"
  },
  button: {
    width: '40%'
  }
})

export default GoalInput
