import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CheckIcon from '../assets/images/check.svg';
import CheckboxIcon from '../assets/images/Checkbox.svg';
import TargetIcon from '../assets/images/target.svg';

import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';

const GoalScreen = ({ navigation }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  const goals = [
    {
      title: 'Lose Weight',
      subtitle: 'Burn fat & slim down',
    },
    {
      title: 'Build Muscle',
      subtitle: 'Gain strength and muscle mass',
    },
    {
      title: 'Improve Stamina',
      subtitle: 'Increase energy and workout longer',
    },
    {
      title: 'Recovery & Rehab',
      subtitle: 'Safe training for recovery',
    },
  ];

  const toggleGoal = goal => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={7} />

      <View style={styles.content}>
        <TargetIcon width={40} height={40} style={styles.icon} />

        <Text style={styles.title}>What is your goal?</Text>

        {goals.map(item => {
          const isSelected = selectedGoals.includes(item.title);

          return (
            <TouchableOpacity
              key={item.title}
              style={[styles.option, isSelected && styles.selectedOption]}
              onPress={() => toggleGoal(item.title)}
            >
              <View>
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
              </View>

              <View style={[styles.checkbox, isSelected && styles.checkedBox]}>
                {isSelected ? (
                  <CheckIcon width={15} height={15} />
                ) : (
                  <CheckboxIcon width={24} height={24} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <CustomButton onPress={() => navigation.navigate('HealthCondition')} />
    </View>
  );
};

export default GoalScreen;

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
    justifyContent: 'space-between',
    alignItems: 'center',
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

  checkbox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedBox: {
    backgroundColor: '#2E7D32',
    borderRadius: 6,
    padding: 4,
  },
});
