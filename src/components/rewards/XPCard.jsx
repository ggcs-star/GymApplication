import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const XPCard = () => {
  const size = 150;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = 0.80;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.card}>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>
           Pro-Tier Athlete
        </Text>
      </View>

      <Text style={styles.points}>
        2,450 <Text style={styles.xp}>XP</Text>
      </Text>

      <Text style={styles.desc}>
        You're in the top 5% of athletes this week.{'\n'}Keep pushing!
      </Text>

  
      <View style={styles.circleWrapper}>
        <Svg width={size} height={size} style={styles.svg}>

          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#DDEEDB"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#6CFF1A"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />

        </Svg>


        <View style={styles.innerCircle}>
          <Text style={styles.level}>Lv. 12</Text>
          <Text style={styles.next}>Next: 3000 XP</Text>
        </View>

      </View>

    </View>
  );
};

export default XPCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EAF7EA',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },

  badge: {
    backgroundColor: '#DDF5DD',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 14,
  },

  badgeText: {
    color: '#2E7D32',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },

  points: {
    fontSize: 42,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  xp: {
    fontSize: 28,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  desc: {
    fontSize: 13,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
  },

  circleWrapper: {
    width: 150,
    height: 150,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  svg: {
    position: 'absolute',
  },

  innerCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  level: {
    fontSize: 28,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  next: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});