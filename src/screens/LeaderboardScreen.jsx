import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LeaderboardCard from '../components/community/LeaderboardCard';
import leaderboardData from '../data/leaderboardData';

const LeaderboardScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 50,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subText}>See top performers in the community</Text>
      </View>

     <LeaderboardCard data={leaderboardData} showViewAll={false} />
    </ScrollView>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    padding: 15,
  },

  header: {
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  subText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});
