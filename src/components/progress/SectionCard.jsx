import React from 'react';
import { View, StyleSheet } from 'react-native';

const SectionCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SectionCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6F5E6',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
  },
});