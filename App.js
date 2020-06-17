import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const inputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const buttonHandler = () => {
    setGoalList(currentGoals => ([{id: Math.random().toString(), value: enteredGoal}, ...currentGoals]))
  };

  return (
    <View style={styles.screen}>
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
            onPress={buttonHandler}
          />
        </View>
      </View>
      <FlatList keyExtractor={item => item.id} data={goalList} renderItem={itemData => (
          <View style={styles.listItem}>
            <Text style={styles.text}>{itemData.item.value}</Text>
          </View>
      )}>
      </FlatList>
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
  },
  listItem: {
    backgroundColor: 'darkseagreen',
    padding: 10,
    marginTop: 15,
    borderRadius: 8
  },
  text: {
    color: 'white'
  }
})
