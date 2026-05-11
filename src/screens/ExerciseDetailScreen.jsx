import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '../assets/images/back.svg';

import {
  VideoSection,
  StatsRow,
  InfoSection,
  ButtonsSection,
} from '../components/ExerciseDetails';

const ExerciseDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [paused, setPaused] = useState(true);

  const { item, exercises, currentIndex } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 40,
        }}
      >
        <TouchableOpacity
          style={[styles.backBtn, { marginTop: insets.top + 10 }]}
          onPress={() => navigation.goBack()}
        >
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.target}>Target: {item.target}</Text>

        <VideoSection
          video={item.video}
          paused={paused}
          setPaused={setPaused}
          
        />

        <StatsRow item={item} />

        <InfoSection
          title="Step-by-Step Instructions"
          data={item.instructions}
          type="steps"
        />

        <InfoSection
          title="Common Mistakes"
          data={item.mistakes}
          type="error"
        />

        <InfoSection title="Pro Tips" data={item.tips} type="tip" />

        <ButtonsSection exercises={exercises} currentIndex={currentIndex} />
      </ScrollView>
    </View>
  );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },
  backBtn: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  target: {
    fontSize: 13,
    color: '#2E7D32',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },
});
