import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FireIcon from '../../assets/images/fire.svg';

const CalorieCard = () => {
  const consumed = 1847;
  const total = 2200;
  const percentage = (consumed / total) * 100;

  return (
    <View style={styles.card}>
      
 
      <View style={styles.row}>
        
      
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Daily Calories</Text>

          <Text style={styles.value}>
            {consumed} / {total}
          </Text>
        </View>

        
        <View style={styles.iconCircle}>
          <FireIcon width={36} height={36} />
        </View>

      </View>

     
      <View style={styles.progress}>
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>

      <Text style={styles.sub}>
        {total - consumed} cal remaining
      </Text>

    </View>
  );
};

export default CalorieCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  value: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#2E7D32',
    marginTop: 5,
  },

  sub: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },

  progress: {
    height: 8,
    backgroundColor: '#cfe9cf',
    borderRadius: 10,
    marginVertical: 12,
    overflow: 'hidden',
  },

  fill: {
    height: '100%',
    backgroundColor: '#6CFF1A',
    borderRadius: 10,
  },

 
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#f1e0d8', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});