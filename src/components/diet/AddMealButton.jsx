import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddMealButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>+ Add Custom Meal</Text>
    </TouchableOpacity>
  );
};

export default AddMealButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#6CFF1A',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
  },
});