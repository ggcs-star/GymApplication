import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const TrainingHeader = ({
  item,
}) => {

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        {item.name}
      </Text>

      <View style={styles.timeBox}>

        <Text style={styles.time}>
          {item.duration} min
        </Text>

      </View>

    </View>
  );
};

export default TrainingHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

    marginBottom: 22,
  },

  heading: {
    fontSize: 26,

    color: '#111',

    fontFamily:
      'Poppins-Bold',
  },

  timeBox: {
    backgroundColor:
      '#EAF7EA',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 30,
  },

  time: {
    color: '#2E7D32',

    fontFamily:
      'Poppins-Bold',
  },
});