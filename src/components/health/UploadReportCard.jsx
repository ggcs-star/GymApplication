import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const UploadReportCard = () => {
  return (
    <TouchableOpacity style={styles.card}>

      <Text style={styles.title}>
        Upload New Report
      </Text>

      <Text style={styles.sub}>
        Blood test, sugar levels, cholesterol, etc.
      </Text>

    </TouchableOpacity>
  );
};

export default UploadReportCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DFF5DF',
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    marginBottom: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  sub: {
    fontSize: 13,
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});