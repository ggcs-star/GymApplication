import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TechniqueCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('TechniqueDetail', { item })}
    >
      <Image source={item.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>

        <Text style={styles.target}>{item.target}</Text>

        <Text style={styles.details}>
          {item.drills} drills • {item.duration} min
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TechniqueCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 190,
  },

  content: {
    padding: 14,
  },

  title: {
    fontSize: 18,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  target: {
    marginTop: 4,
    color: '#2E7D32',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },

  details: {
    marginTop: 6,
    color: '#666',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  levelBox: {
    position: 'absolute',
    top: 12,
    right: 12,

    backgroundColor: '#6CFF1A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  levelText: {
    fontSize: 11,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
});
