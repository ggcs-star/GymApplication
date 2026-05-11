import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MacroCard = ({ title, value, total }) => {
  const percentage = (value / total) * 100;


  
  const getColor = () => {
    if (title === 'Protein') return '#2E7D32'; 
    if (title === 'Carbs') return '#FF9800'; 
    if (title === 'Fats') return '#F44336';  
    return '#6CFF1A'; 
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>
        {value}g
      </Text>

      <Text style={styles.sub}>
        of {total}g
      </Text>

      <View style={styles.progress}>
        <View
          style={[
            styles.fill,
            {
              width: `${percentage}%`,
              backgroundColor: getColor(), 
            },
          ]}
        />
      </View>

    </View>
  );
};

export default MacroCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#E6F5E6',
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 5,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },

  title: {
    fontSize: 13,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  value: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginTop: 4,
  },

  sub: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },


  progress: {
    height: 6,
    backgroundColor: '#cfe9cf',
    borderRadius: 10,
    marginTop: 8,
    overflow: 'hidden',
  },

  fill: {
    height: '100%',
    backgroundColor: '#6CFF1A', 
    borderRadius: 10,
  },
});