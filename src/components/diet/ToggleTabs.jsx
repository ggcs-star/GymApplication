import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import VegIcon from '../../assets/images/veg.svg';
import NonVegIcon from '../../assets/images/nonveg.svg';

const ToggleTabs = ({ selected, setSelected }) => {
  return (
    <View style={styles.container}>
      
     
      <TouchableOpacity
        style={[
          styles.tab,
          selected === 'veg' && styles.activeTab,
        ]}
        onPress={() => setSelected('veg')}
        activeOpacity={0.8}
      >
        <View style={styles.row}>
          <VegIcon
            width={16}
            height={16}
         
          />
          <Text
            style={[
              styles.text,
              selected === 'veg' && styles.activeText,
            ]}
          >
            Vegetarian
          </Text>
        </View>
      </TouchableOpacity>

    
      <TouchableOpacity
        style={[
          styles.tab,
          selected === 'nonveg' && styles.activeTab,
        ]}
        onPress={() => setSelected('nonveg')}
        activeOpacity={0.8}
      >
        <View style={styles.row}>
          <NonVegIcon
            width={16}
            height={16}
           
          />
          <Text
            style={[
              styles.text,
              selected === 'nonveg' && styles.activeText,
            ]}
          >
            Non-Veg
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default ToggleTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E6F5E6',
    borderRadius: 14,
    padding: 5,
    marginBottom: 15,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: '#6CFF1A',
    elevation: 2,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  text: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },

  activeText: {
    color: '#1A1A1A',
    fontFamily: 'Poppins-Bold',
  },
});