import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ScoreCard = () => {
  return (
    <View style={styles.scoreCard}>
      <View>
        <Text style={styles.scoreTitle}>Today's Fitness Score</Text>
        <Text style={styles.scoreValue}>85/100</Text>
        <Text style={styles.scoreSub}>+12% from yesterday</Text>
      </View>

      <AnimatedCircularProgress
        size={90}
        width={6}
        fill={85}
        tintColor="#2E7D32"
        backgroundColor="#d9f5d9"
        rotation={0}
        lineCap="round"
      >
        {(fill) => (
          <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default ScoreCard;

const styles = StyleSheet.create({
  scoreCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6F5E6',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },

  scoreTitle: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  scoreValue: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#2E7D32',
  },

  scoreSub: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular', 
  },

  progressText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#2E7D32',
  },
});