import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community</Text>

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  addBtn: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#6CFF1A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plus: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});