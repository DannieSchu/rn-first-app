import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const buttonHandler = goalTitle => {
    setGoalList(currentGoals => ([
      {
        id: Math.random().toString(),
        value: goalTitle
      }, ...currentGoals]))
  };

  return (
    <View style={styles.screen}>
      <GoalInput onPress={buttonHandler} />
      <FlatList
        keyExtractor={item => item.id}
        data={goalList}
        renderItem={itemData => <GoalItem title={itemData.item.value} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
