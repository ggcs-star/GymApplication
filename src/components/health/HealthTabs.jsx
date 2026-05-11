import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HealthTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.tab}
        onPress={() => setActiveTab('summary')}
      >
        <Text
          style={[styles.tabText, activeTab === 'summary' && styles.activeText]}
        >
          Summary
        </Text>

        {activeTab === 'summary' && <View style={styles.activeLine} />}
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.tab}
        onPress={() => setActiveTab('timeline')}
      >
        <Text
          style={[
            styles.tabText,

            activeTab === 'timeline' && styles.activeText,
          ]}
        >
          Medical Timeline
        </Text>

        {activeTab === 'timeline' && <View style={styles.activeLine} />}
      </TouchableOpacity>
    </View>
  );
};

export default HealthTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#DDE8DD',
  },

  tab: {
    flex: 1,

    alignItems: 'center',
    paddingBottom: 14,
    position: 'relative',
  },

  tabText: {
    fontSize: 15,
    color: '#888',
    fontFamily: 'Poppins-Medium',
  },

  activeText: {
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  activeLine: {
    position: 'absolute',
    bottom: -1,
    width: '100%',
    height: 2,
    backgroundColor: '#6CFF1A',
    borderRadius: 20,
  },
});
