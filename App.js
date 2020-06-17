import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [inputVisibility, setInputVisibility] = useState(false);

  const onAddGoal = goalTitle => {
    setGoalList(currentGoals => ([
      {
        id: Math.random().toString(),
        value: goalTitle
      }, ...currentGoals]));
    setInputVisibility(false);
  };

  const onDeleteGoal = goalId => {
    setGoalList(currentGoals => currentGoals.filter(currentGoal => currentGoal.id !== goalId))
  };

  const onCancel = () => {
    setInputVisibility(false);
  };

  return (
    <View style={styles.screen}>
      <Button 
        title="Add New Goal" 
        onPress={() => setInputVisibility(true)} 
      />
      <GoalInput 
        visible={inputVisibility} 
        onAddGoal={onAddGoal} 
        onCancel={onCancel}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={goalList}
        renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={() => onDeleteGoal(itemData.item.id)}
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
