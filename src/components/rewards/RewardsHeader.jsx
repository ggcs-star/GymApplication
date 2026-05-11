import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BackIcon from '../../assets/images/back.svg';

const RewardsHeader = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.header}>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
        activeOpacity={0.8}
      >
        <BackIcon width={24} height={24} />
      </TouchableOpacity>

      <Text style={styles.title}>
        Rewards
      </Text>

    </View>
  );
};

export default RewardsHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  backBtn: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  title: {
    fontSize: 26,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },
});