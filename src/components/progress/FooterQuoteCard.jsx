import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FooterQuoteCard = () => {
  return (
    <LinearGradient
      colors={['#95d895', '#D6F7D6']}  
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
     
      <Text style={styles.quote}>
        "Push yourself because no one else is going to do it for you."
      </Text>

     
      <Text style={styles.subtext}>
        Stay consistent. Results will follow.
      </Text>

     
      <View style={styles.line} />
    </LinearGradient>
  );
};

export default FooterQuoteCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
    elevation: 4,
  },

  quote: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1A1A1A',
    lineHeight: 22,
  },

  subtext: {
    fontSize: 13,
    color: '#2E7D32',
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
  },

  line: {
    marginTop: 10,
    height: 3,
    width: 80,
    backgroundColor: '#2E7D32',
    borderRadius: 5,
  },
});