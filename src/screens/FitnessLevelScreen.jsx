import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';
import GaugeIcon from '../assets/images/gauge.svg';

const FitnessLevelScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('Beginner');

  const options = [
    {
      title: 'Beginner',
      subtitle: 'Just getting started',
    },
    {
      title: 'Intermediate',
      subtitle: 'Regular workouts',
    },
    {
      title: 'Advanced',
      subtitle: 'Highly experienced',
    },
  ];

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={6} />

      <View style={styles.content}>
        <GaugeIcon width={40} height={40} style={styles.icon} />

        <Text style={styles.title}>What is your fitness level?</Text>

        {options.map(item => {
          const isSelected = selected === item.title;

          return (
            <TouchableOpacity
              key={item.title}
              style={[styles.option, isSelected && styles.selectedOption]}
              onPress={() => setSelected(item.title)}
            >
              <View>
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
              </View>

              <View style={styles.radioOuter}>
                {isSelected && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <CustomButton onPress={() => navigation.navigate('Goal')} />
    </View>
  );
};

export default FitnessLevelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    padding: 20,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    marginBottom: 30,
    fontFamily: 'Poppins-Regular',
  },

  option: {
    width: '100%',
    padding: 18,
    borderRadius: 15,
    backgroundColor: '#E6F5E6',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectedOption: {
    borderWidth: 2,
    borderColor: '#2E7D32',
    backgroundColor: '#DFF5DF',
  },

  optionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },

  optionSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
    fontFamily: 'Poppins-Regular',
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2E7D32',
  },
});
