import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StreakIcon from '../../assets/images/award.svg'; 

const StreakCard = ({ days = 12, totalDays = 7 }) => {
  return (
    <View style={styles.container}>
      
    
      <View style={styles.headerRow}>
        <Text style={styles.title}>Your Streak</Text>
        <Text style={styles.link}>View Rewards</Text>
      </View>

     
      <View style={styles.card}>
        
       
        <View>
          <Text style={styles.daysText}>{days} Days</Text>
          <Text style={styles.subText}>Keep it going!</Text>

       
          <View style={styles.progressRow}>
            {[...Array(totalDays)].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressBar,
                  index < days % totalDays
                    ? styles.activeBar
                    : styles.inactiveBar,
                ]}
              />
            ))}
          </View>
        </View>

        
        <View style={styles.iconCircle}>
          <StreakIcon width={22} height={22} />
        </View>
      </View>
    </View>
  );
};

export default StreakCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },

  link: {
    fontSize: 12,
    color: '#2E7D32',
    fontFamily: 'Poppins-Medium',
  },

  card: {
    backgroundColor: '#E6F5E6',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderWidth: 1.2,
    borderColor: '#2E7D32',
  },

  daysText: {
    fontSize: 26,
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },

  subText: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
  },

  progressRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  progressBar: {
    width: 22,
    height: 5,
    borderRadius: 5,
    marginRight: 5,
  },

  activeBar: {
    backgroundColor: '#2E7D32',
  },

  inactiveBar: {
    backgroundColor: '#cfe9cf',
  },

  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#b0dab0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});