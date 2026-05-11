import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import WaterIcon from '../../assets/images/water.svg';

const HydrationCard = ({ glasses = 6, total = 8, onAdd }) => {
  return (
    <LinearGradient
      colors={['#a0d4e9', '#d8eefa']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
    
      <View style={styles.left}>
        <View style={styles.iconCircle}>
          <WaterIcon width={30} height={30} />
        </View>

        <View>
          <Text style={styles.title}>Stay Hydrated!</Text>
          <Text style={styles.sub}>
            {glasses}/{total} glasses today
          </Text>
        </View>
      </View>

     
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>+1 Glass</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HydrationCard;



const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 16,
    borderRadius: 18,
    marginVertical: 10,

    
    shadowColor: '#030608',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,

    backgroundColor: '#B3E5FC',
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
  },

  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  sub: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },

  button: {
    backgroundColor: '#4FC3F7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
});