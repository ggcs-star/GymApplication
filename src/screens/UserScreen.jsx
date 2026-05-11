import React from 'react';

import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import BackIcon from '../assets/images/back.svg';

import {
  ProfileHeader,
  ProfileStats,
  GoalsCard,
  DeviceCard,
  QuickActions,
} from '../components/profile';

const UserScreen = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: insets.top + 10,
        paddingBottom: 120,
      }}
    >
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <BackIcon width={24} height={24} />
      </TouchableOpacity>

      <ProfileHeader />

      <ProfileStats />

      <GoalsCard />

      <DeviceCard />

      <QuickActions />
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F8FFF5',

    paddingHorizontal: 20,
  },
  backBtn: {
    width: 42,
    height: 42
    
  },
});
