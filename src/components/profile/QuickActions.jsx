import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import ProgressIcon from '../../assets/images/progress1.svg';
import AwardIcon from '../../assets/images/award.svg';
import HeartIcon from '../../assets/images/heart-pulse.svg';
import LogoutIcon from '../../assets/images/logout.svg';

import RightArrowIcon from '../../assets/images/arrow-right.svg';

const ActionButton = ({ title, Icon, logout, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
    <LinearGradient
      colors={logout ? ['#FFEAEA', '#FFD6D6'] : ['#F1FFF1', '#DFF5DF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.btn, logout && styles.logoutBtn]}
    >
      {!logout ? (
        <View style={styles.leftSection}>
          <View style={styles.iconText}>
            <Icon width={24} height={24} />

            <Text style={styles.btnText}>{title}</Text>
          </View>

          <RightArrowIcon width={22} height={22} />
        </View>
      ) : (
        <View style={styles.logoutContent}>
          <LogoutIcon width={24} height={24} />

          <Text style={styles.logoutText}>{title}</Text>
        </View>
      )}
    </LinearGradient>
  </TouchableOpacity>
);

const QuickActions = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.heading}>Quick Actions</Text>

      <ActionButton
        title="View Progress"
        Icon={ProgressIcon}
        onPress={() => navigation.navigate('Progress')}
      />

      <ActionButton
        title="My Rewards"
        Icon={AwardIcon}
        onPress={() => navigation.navigate('Reward')}
      />

      <ActionButton
        title="Health Data"
        Icon={HeartIcon}
        onPress={() => navigation.navigate('Health')}
      />

      <View style={styles.logoutContainer}>
        <ActionButton
          title="Logout"
          Icon={LogoutIcon}
          logout
          onPress={() => console.log('Logout')}
        />
      </View>
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginBottom: 14,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  btn: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#D8EDD8',
  },

  leftSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnText: {
    color: '#111',
    fontSize: 16,
    marginLeft: 12,
    fontFamily: 'Poppins-Medium',
  },

  logoutContainer: {
    marginTop: 18,
  },

  logoutBtn: {
    borderColor: '#FFCDCD',
  },

  logoutContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#FF383C',
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
  },
});
