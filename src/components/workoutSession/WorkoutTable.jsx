import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import StatusSvg from '../../assets/images/status.svg';

const WorkoutTable = ({ item }) => {
  const [completedSets, setCompletedSets] = useState([]);

  const handleComplete = setNumber => {
    if (completedSets.includes(setNumber)) {
      setCompletedSets(completedSets.filter(value => value !== setNumber));
    } else {
      setCompletedSets([...completedSets, setNumber]);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={[styles.head, styles.setHead]}>SET</Text>

        <Text style={[styles.head, styles.weightHead]}>WEIGHT</Text>

        <Text style={[styles.head, styles.repsHead]}>REPS</Text>

        <Text style={[styles.head, styles.statusHead]}>STATUS</Text>
      </View>

      {Array.from({
        length: item.sets,
      }).map((_, index) => {
        const set = index + 1;

        const isCompleted = completedSets.includes(set);

        return (
          <TouchableOpacity
            key={set}
            activeOpacity={0.9}
            onPress={() => handleComplete(set)}
            style={[styles.row, isCompleted && styles.activeRow]}
          >
            <Text style={[styles.setText, isCompleted && styles.activeText]}>
              {set}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="100"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={3}
            />

            <TextInput
              style={styles.input}
              value={String(item.reps)}
              editable={false}
            />

            <View style={styles.statusWrapper}>
              <View style={[styles.circle, isCompleted && styles.activeCircle]}>
                {isCompleted ? (
                  <StatusSvg width={26} height={26} />
                ) : (
                  <View style={styles.emptyCircle} />
                )}
              </View>

              {isCompleted && (
                <Text style={styles.completedText}>Completed</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default WorkoutTable;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    borderRadius: 24,
    padding: 16,
    marginBottom: 24,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 6,
  },

  head: {
    textAlign: 'center',
    fontSize: 11,
    color: '#666',
    fontFamily: 'Poppins-Bold',
  },

  setHead: {
    width: 45,
  },

  weightHead: {
    flex: 1,
  },

  repsHead: {
    flex: 1,
  },

  statusHead: {
    width: 70,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 14,
  },

  activeRow: {
    backgroundColor: '#F1FFF1',
    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },

  setText: {
    width: 45,
    textAlign: 'center',
    color: '#111',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },

  activeText: {
    color: '#2E7D32',
  },

  input: {
    flex: 1,
    height: 46,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 14,
    color: '#111',
    backgroundColor: '#FAFAFA',
    fontFamily: 'Poppins-Medium',
  },

  statusWrapper: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeCircle: {
    backgroundColor: 'transparent',
  },

  emptyCircle: {
    width: 24,
    height: 24,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#CFCFCF',
  },

  completedText: {
    marginTop: 4,
    fontSize: 10,
    color: '#2E7D32',
    fontFamily: 'Poppins-Medium',
  },
});
