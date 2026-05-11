import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/images/back.svg';

const HealthHeader = () => {
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

      <Text style={styles.title}>Health Reports</Text>

      <Text style={styles.subtitle}>
        Track your medical reports and AI-powered health insights
      </Text>
    </View>
  );
};

export default HealthHeader;

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },

  title: {
    fontSize: 24,
    color: '#1A1A1A',
    fontFamily: 'Poppins-Bold',
    lineHeight: 30,
  },

  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    width: '92%',
  },
});
