import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';
import UsersIcon from '../assets/images/users.svg';
import MaleIcon from '../assets/images/male.svg';
import FemaleIcon from '../assets/images/female.svg';
import OtherIcon from '../assets/images/others.svg';

const GenderScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('Female');

  const options = [
    { label: 'Male', icon: MaleIcon },
    { label: 'Female', icon: FemaleIcon },
    { label: 'Other', icon: OtherIcon },
  ];

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={3} />

      <View style={styles.content}>
        <UsersIcon width={40} height={40} style={styles.icon} />

        <Text style={styles.title}>What is your gender?</Text>

        {options.map(item => {
          const isSelected = selected === item.label;
           const IconComponent = item.icon;

          return (
            <TouchableOpacity
              key={item.label}
              style={[styles.option, isSelected && styles.selectedOption]}
              onPress={() => setSelected(item.label)}
            >
             
              <IconComponent width={20} height={20} style={styles.genderIcon} />
              <Text style={styles.optionText}>{item.label}</Text>
              <View style={styles.radioOuter}>
                {isSelected && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <CustomButton onPress={() => navigation.navigate('Weight')} />
    </View>
  );
};

export default GenderScreen;

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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F5E6',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  selectedOption: {
    borderWidth: 2,
    borderColor: '#2E7D32',
  },

  iconText: {
    fontSize: 18,
    marginRight: 10,
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2E7D32',
  },

  genderIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
