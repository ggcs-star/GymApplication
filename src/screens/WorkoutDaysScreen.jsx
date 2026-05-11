import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';


import CalendarIcon from '../assets/images/calendar-days.svg';

const WorkoutDaysScreen = ({ navigation }) => {
  const [selectedDays, setSelectedDays] = useState([]);

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const toggleDay = day => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={9} />

      <View style={styles.content}>
  
        <CalendarIcon width={40} height={40} />

        <Text style={styles.title}>
          Which days do you want to work out?
        </Text>

        <View style={styles.grid}>
          {days.map(day => {
            const isSelected = selectedDays.includes(day);

            return (
              <TouchableOpacity
                key={day}
                style={[
                  styles.dayBox,
                  isSelected && styles.selectedDayBox,
                ]}
                onPress={() => toggleDay(day)}
              >
                <Text
                  style={[
                    styles.dayText,
                    isSelected && styles.selectedDayText,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <CustomButton
        title="Next"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default WorkoutDaysScreen;



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

  title: {
    fontSize: 18,
    marginVertical: 25,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },


  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  dayBox: {
    width: '48%',
    paddingVertical: 18,
    borderRadius: 12,
    backgroundColor: '#E6F5E6',
    marginBottom: 15,
    alignItems: 'center',
  },

  selectedDayBox: {
    backgroundColor: '#DFF5DF',
    borderWidth: 2,
    borderColor: '#2E7D32',
  },

  dayText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#1B1B1B',
  },

  selectedDayText: {
    color: '#1B1B1B',
  },
});