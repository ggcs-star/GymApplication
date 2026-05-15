import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const TrainingRestTimer = () => {

  return (
    <View style={styles.container}>

      <View style={styles.circle}>

        <Text style={styles.time}>
          60s
        </Text>

        <Text style={styles.rest}>
          REST
        </Text>

      </View>

    </View>
  );
};

export default TrainingRestTimer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    marginBottom: 30,
  },

  circle: {
    width: 140,

    height: 140,

    borderRadius: 80,

    borderWidth: 6,

    borderColor: '#2E7D32',

    justifyContent: 'center',

    alignItems: 'center',
  },

  time: {
    fontSize: 28,

    fontFamily:
      'Poppins-Bold',
  },

  rest: {
    color: '#666',

    fontFamily:
      'Poppins-Regular',
  },
});