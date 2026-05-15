import React from 'react';

import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '../assets/images/back.svg';

import {
  WorkoutHeader,
  WorkoutVideoCard,
  WorkoutTable,
  RestTimer,
  WorkoutNavigation,
} from '../components/workoutSession';

const WorkoutSessionScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const { item, exercises, currentIndex } = route.params;

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

        <WorkoutHeader item={item} />

        <WorkoutVideoCard item={item} />

        <WorkoutTable item={item} />

        <RestTimer />

        <WorkoutNavigation exercises={exercises} currentIndex={currentIndex} />
      </ScrollView>
    </View>
  );
};

export default WorkoutSessionScreen;

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
