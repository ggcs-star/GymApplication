import React from 'react';

import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {
  RewardsHeader,
  XPCard,
  WeeklyStreak,
  EarnMoreXP,
  RewardStore,
} from '../components/rewards';

const RewardScreen = () => {

  const insets =
    useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: insets.top + 10,
        paddingBottom: 120,
      }}
    >

      <RewardsHeader />

      <XPCard />

      <WeeklyStreak />

      <EarnMoreXP />

      <RewardStore />

    </ScrollView>
  );
};

export default RewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },
});