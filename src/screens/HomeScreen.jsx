import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../components/home/Header';
import ScoreCard from '../components/home/ScoreCard';
import WorkoutCard from '../components/home/WorkoutCard';
import StatsCard from '../components/home/StatsCard';
import QuickActions from '../components/home/QuickActions';
import FooterCard from '../components/home/FooterCard';
import StreakCard from '../components/home/StreakCard';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: insets.bottom + 90 }}
    >
      <Header />
      <ScoreCard />
      <WorkoutCard />
      <StatsCard />
      <StreakCard/>
      <QuickActions />
      <FooterCard />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },
});