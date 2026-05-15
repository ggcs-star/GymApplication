import React from 'react';

import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '../assets/images/back.svg';

import {
  TrainingHeader,
  TrainingVideoCard,
  TrainingTable,
  TrainingRestTimer,
  TrainingNavigation,
} from '../components/trainingSession';

const TrainingSessionScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const { item, techniques, currentIndex } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 10,

          paddingBottom: insets.bottom + 40,
        }}
      >
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <TrainingHeader item={item} />

        <TrainingVideoCard item={item} />

        <TrainingTable item={item} />

        <TrainingRestTimer />

        <TrainingNavigation
          techniques={techniques}
          currentIndex={currentIndex}
        />
      </ScrollView>
    </View>
  );
};

export default TrainingSessionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F8FFF5',

    paddingHorizontal: 20,
  },

  backBtn: {
    marginBottom: 14,
  },
});
