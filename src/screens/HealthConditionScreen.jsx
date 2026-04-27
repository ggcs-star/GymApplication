import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';

import CheckIcon from '../assets/images/check.svg';
import CheckboxIcon from '../assets/images/Checkbox.svg';
import HeartIcon from '../assets/images/heart-plus.svg';

const HealthConditionScreen = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const options = [
    'Diabetes',
    'Blood Pressure',
    'Heart Condition',
    'Injury',
    'None',
  ];

  const toggleItem = item => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={8} />

      <View style={styles.content}>
        <HeartIcon width={40} height={40} style={styles.icon} />

        <Text style={styles.title}>Do you have any health conditions?</Text>

        {options.map(item => {
          const isSelected = selectedItems.includes(item);

          return (
            <TouchableOpacity
              key={item}
              style={[styles.option, isSelected && styles.selectedOption]}
              onPress={() => toggleItem(item)}
            >
              <Text style={styles.optionTitle}>{item}</Text>

              <View style={styles.checkboxContainer}>
                {isSelected ? (
                  <View style={styles.checkedBox}>
                    <CheckIcon width={15} height={15} />
                  </View>
                ) : (
                  <CheckboxIcon width={24} height={24} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <CustomButton
        title="Next"
        onPress={() => navigation.navigate('WorkoutDays')}
      />
    </View>
  );
};

export default HealthConditionScreen;

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
    resizeMode: 'contain',
  },

  title: {
    fontSize: 18,
    marginBottom: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
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

  checkboxContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedBox: {
    width: 24,
    height: 24,
    backgroundColor: '#2E7D32',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
