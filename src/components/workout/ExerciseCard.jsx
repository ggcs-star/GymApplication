import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const ExerciseCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ExerciseDetail', { item })}
    >
      <Text style={styles.time}>{item.time} min</Text>

      <Image source={item.image} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.target}>Target: {item.target}</Text>
        <Text style={styles.details}>
          {item.sets} sets • {item.reps} reps
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#E6F5E6',
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,

    position: 'relative',
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },

  target: {
    fontSize: 12,
    color: '#2E7D32',
    fontFamily: 'Poppins-Regular',
  },

  details: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  time: {
    position: 'absolute',
    top: 10,
    right: 10,

    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },
});
