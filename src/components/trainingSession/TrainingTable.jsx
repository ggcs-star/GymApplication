import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import StatusSvg from '../../assets/images/status.svg';

const TrainingTable = ({ item }) => {
  const [completedDrills, setCompletedDrills] = useState([]);

  const handleComplete = drillNumber => {
    if (completedDrills.includes(drillNumber)) {
      setCompletedDrills(
        completedDrills.filter(value => value !== drillNumber),
      );
    } else {
      setCompletedDrills([...completedDrills, drillNumber]);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.drillHead}>DRILL</Text>

        <Text style={styles.statusHead}>STATUS</Text>
      </View>

      {Array.from({
        length: item.drills,
      }).map((_, index) => {
        const drill = index + 1;

        const isCompleted = completedDrills.includes(drill);

        return (
          <TouchableOpacity
            key={drill}
            activeOpacity={0.9}
            onPress={() => handleComplete(drill)}
            style={[styles.row, isCompleted && styles.activeRow]}
          >
            <View>
              <Text
                style={[styles.drillText, isCompleted && styles.activeText]}
              >
                Drill {drill}
              </Text>

              {isCompleted && (
                <Text style={styles.completedText}>Completed</Text>
              )}
            </View>

            <View style={[styles.circle, isCompleted && styles.activeCircle]}>
              {isCompleted ? (
                <StatusSvg width={26} height={26} />
              ) : (
                <View style={styles.emptyCircle} />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TrainingTable;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    borderRadius: 24,
    padding: 16,
    marginBottom: 24,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 6,
  },

  drillHead: {
    fontSize: 11,
    color: '#666',
    fontFamily: 'Poppins-Bold',
  },

  statusHead: {
    fontSize: 11,
    color: '#666',
    fontFamily: 'Poppins-Bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  activeRow: {
    backgroundColor: '#F1FFF1',
    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },

  drillText: {
    fontSize: 16,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  activeText: {
    color: '#2E7D32',
  },

  completedText: {
    marginTop: 3,
    fontSize: 12,
    color: '#2E7D32',
    fontFamily: 'Poppins-Medium',
  },

  circle: {
    width: 36,

    height: 36,
    borderRadius: 20,
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
});
