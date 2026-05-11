import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TrendingDown from '../../assets/images/trending-down.svg';
import Target from '../../assets/images/target1.svg';
import Calendar from '../../assets/images/calendar.svg';
import Progress from '../../assets/images/progress.svg';

const StatCard = ({ title, value, subtitle, color, type }) => {
  const renderIcon = () => {
    switch (type) {
      case 'weight':
        return <TrendingDown width={20} height={20} />;
      case 'goal':
        return <Target width={20} height={20} />;
      case 'days':
        return <Calendar width={20} height={20} />;
      case 'progress':
        return <Progress width={20} height={20} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.left}>
          {renderIcon()}
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <Text style={[styles.value, { color }]}>{value}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default StatCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    borderRadius: 16,
    padding: 14,
    width: '48%',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
   
    alignItems: 'center',
  },

  title: {
    fontSize: 13,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  value: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginTop: 6,
  },

  subtitle: {
    fontSize: 11,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },

  left: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6
},
});
