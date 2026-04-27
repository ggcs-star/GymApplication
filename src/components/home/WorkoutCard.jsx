import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ActivityIcon from '../../assets/images/activity.svg';

const WorkoutCard = () => {

   const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/gym.jpg')}
      style={styles.card}
      imageStyle={{
        borderRadius: 20,
        resizeMode: 'cover',
      }}
    >
      <View style={styles.overlay} />

      <View style={styles.cardContent}>
        <View style={styles.aiRow}>
          <ActivityIcon width={16} height={16} />
          <Text style={styles.cardTitleWhite}>AI RECOMMENDED</Text>
        </View>

        <Text style={styles.cardSubtitleWhite}>Upper Body Strength</Text>

        <Text style={styles.cardTimeWhite}>45 mins • 8 exercises</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Workout')}
        >
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WorkoutCard;

const styles = StyleSheet.create({
  card: {
    height: 210,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },

  cardTitleWhite: {
    fontSize: 12,
    color: '#6CFF1A',
    fontFamily: 'Poppins-Regular',
  },

  cardSubtitleWhite: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginTop: 5,
  },

  cardTimeWhite: {
    fontSize: 13,
    color: '#fff',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },

  button: {
    backgroundColor: '#6CFF1A',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },
});
