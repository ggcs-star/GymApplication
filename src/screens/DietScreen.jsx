import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function DietScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet Plan</Text>

      <Text style={styles.subtitle}>
        Follow your diet to stay fit & healthy 
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Coming Soon </Text>
        <Text style={styles.cardText}>
          Your personalized meal plans will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },

  card: {
    width: '100%',
    backgroundColor: '#E6F5E6',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
  },

  cardText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});