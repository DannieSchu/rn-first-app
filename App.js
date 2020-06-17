import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = goalTitle => {
    setGoalList(currentGoals => ([
      {
        id: Math.random().toString(),
        value: goalTitle
      }, ...currentGoals]))
  };

  const addDeleteHandler = goalId => {
    setGoalList(currentGoals => currentGoals.filter(currentGoal => currentGoal.id !== goalId))
  };

  return (
    <View style={styles.screen}>
      <GoalInput onPress={addGoalHandler} />
      <FlatList
        keyExtractor={item => item.id}
        data={goalList}
        renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={() => addDeleteHandler(itemData.item.id)}
        />
        } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
