import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StepsIcon from '../../assets/images/steps.svg';

const FooterCard = () => {
  return (
    <LinearGradient
      colors={['#95d895', '#D6F7D6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.footerCard}
    >
      <View style={styles.footerRow}>
        <StepsIcon width={18} height={18} />
        <Text style={styles.footerTitle}>AI Insight</Text>
      </View>

      <Text style={styles.footerText}>
        Increase your protein intake today to boost muscle recovery
      </Text>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>View Tips</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FooterCard;

const styles = StyleSheet.create({
  footerCard: {
    padding: 18,
    borderRadius: 16,
    marginTop: 15,
    marginBottom: 10,

    shadowColor: '#2E7D32',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },

  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },

  footerTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },

  footerText: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },

  footerButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#6CFF1A',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },

  footerButtonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },
});
