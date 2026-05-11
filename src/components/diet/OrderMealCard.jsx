import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MealIcon from '../../assets/images/meal1.svg';
import ArrowIcon from '../../assets/images/arrow-right.svg';

const OrderMealCard = () => {

  const handlePress = () => {
    Linking.openURL('https://jagods.com'); 
  };

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.9}
      onPress={handlePress}
    >
      <LinearGradient
        colors={['#95d895', '#D6F7D6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.iconCircle}>
          <MealIcon width={22} height={22} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Order Healthy Meals</Text>

          <Text style={styles.sub}>
            Powered by <Text style={styles.highlight}>Jagods</Text> • Fresh & Customized
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>Recommended</Text>
          </View>
        </View>

        <View style={styles.arrowCircle}>
          <ArrowIcon width={18} height={18} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default OrderMealCard;



const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 18,

    // borderWidth: 1.5,
    // borderColor: '#2E7D32',

    
    shadowColor: '#2E7D32',
     shadowOpacity: 0.1,
     shadowRadius: 6,
    elevation: 6,

  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,

    backgroundColor: '#2E7D32', 
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 14,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  sub: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },

  highlight: {
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
    fontSize: 14
  },

 
  badge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#6CFF1A',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },

  badgeText: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  arrowCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,

    backgroundColor: '#6CFF1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});