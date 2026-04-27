import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Hello Harsh 👋</Text>
      <Text style={styles.subText}>Ready to crush your goal?</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 15,
  },

  greeting: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A', 
  },

  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
});