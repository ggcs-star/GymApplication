import React from 'react';

import { View, ScrollView, StyleSheet } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import sportsTrainingData from '../data/sportsTrainingData';

import {
  SportsTrainingHeader,
  SportsTrainingStats,
  TechniqueList,
} from '../components/sportsTraining';

const SportsTrainingScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const { sport } = route.params;

  const data = sportsTrainingData[sport];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 10,
          paddingBottom: 100,
        }}
      >
        <SportsTrainingHeader navigation={navigation} sport={sport} />

        <SportsTrainingStats />

        <TechniqueList data={data} />
      </ScrollView>
    </View>
  );
};

export default SportsTrainingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 16,
  },
});
