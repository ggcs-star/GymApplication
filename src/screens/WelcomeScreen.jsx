import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import GoatIcon from '../assets/images/goat.svg';

const WelcomeScreen = ({ navigation }) => {
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslate = useRef(new Animated.Value(20)).current;

  const buttonTranslate = useRef(new Animated.Value(40)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslate, {
          toValue: 0,
          duration: 500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(buttonTranslate, {
          toValue: 0,
          duration: 500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.contentWrapper}>
          <Animated.View
            style={{
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            }}
          >
            <GoatIcon width="100%" height={220} style={styles.logo} />
          </Animated.View>

          <Animated.View
            style={{
              opacity: textOpacity,
              transform: [{ translateY: textTranslate }],
            }}
          >
            <Text style={styles.title}>
              Welcome to <Text style={styles.highlight}>GOATFITT</Text>
            </Text>

            <Text style={styles.subtitle}>
              Your AI-powered fitness partner for personalized workouts,
              nutrition, and progress tracking—all in one place.
            </Text>
          </Animated.View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.contentWrapper}>
          <Animated.View
            style={{
              opacity: buttonOpacity,
              transform: [{ translateY: buttonTranslate }],
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Name')}
            >
              <Text style={styles.buttonText}>Let's Start!</Text>
            </TouchableOpacity>
          </Animated.View>

          <Text style={styles.signin}>
            Already have an account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Login')}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },

  contentWrapper: {
    width: '90%',
    alignSelf: 'center',
  },

  topSection: {
    alignItems: 'center',
    marginTop: 20,
  },

  logo: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Bold',
    lineHeight: 34,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5F6368',
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
  },

  bottomSection: {
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#6CFF1A',
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    fontSize: 18,
    color: '#1A1A1A',
    fontFamily: 'Poppins-Bold',
  },

  signin: {
    fontSize: 14,
    color: '#5F6368',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },

  link: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
  },
  highlight: {
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },
});
