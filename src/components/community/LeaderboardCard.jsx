import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import AwardIcon from '../../assets/images/award.svg';

const LeaderboardCard = ({ data, showViewAll = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <AwardIcon width={24} height={24} />
          <Text style={styles.title}>Leaderboard</Text>
        </View>

        {showViewAll && (
          <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* List */}
      {data.map((item, index) => {
        const isYou = item.isYou;

        const RowWrapper = isYou ? LinearGradient : View;

        return (
          <RowWrapper
            key={item.id}
            {...(isYou && {
              colors: ['#2b522b', '#67b667'],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            })}
            style={[
              styles.row,
              isYou && styles.gradientRow,
            ]}
          >
            
            <View style={[styles.rankCircle, getRankColor(index)]}>
              <Text style={styles.rankText}>{index + 1}</Text>
            </View>

            
            <View style={styles.info}>
              <Text style={[styles.name, isYou && styles.youText]}>
                {item.name}
              </Text>
              <Text style={[styles.streak, isYou && styles.youSubText]}>
                {item.streak}
              </Text>
            </View>

            
            <View style={styles.pointsBox}>
              <Text style={[styles.points, isYou && styles.youText]}>
                {item.points}
              </Text>
              <Text style={[styles.pointsLabel, isYou && styles.youSubText]}>
                points
              </Text>
            </View>
          </RowWrapper>
        );
      })}
    </View>
  );
};

export default LeaderboardCard;

const getRankColor = index => {
  if (index === 0) return { backgroundColor: '#FFD700' };
  if (index === 1) return { backgroundColor: '#C0C0C0' };
  if (index === 2) return { backgroundColor: '#CD7F32' };
  return { backgroundColor: '#A5D6A7' };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6F5E6',
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  title: {
    color: '#1A1A1A',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },

  viewAll: {
    color: '#2E7D32',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },

  gradientRow: {
    backgroundColor: 'transparent', 
  },

  rankCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  rankText: {
    color: '#000',
    fontWeight: 'bold',
  },

  info: {
    flex: 1,
  },

  name: {
    color: '#1A1A1A',
    fontFamily: 'Poppins-Medium',
  },

  streak: {
    color: '#666',
    fontSize: 10,
  },

  pointsBox: {
    alignItems: 'flex-end',
  },

  points: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },

  pointsLabel: {
    color: '#666',
    fontSize: 10,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },


  youText: {
    color: '#fff',
  },

  youSubText: {
    color: '#E8F5E9',
  },
});