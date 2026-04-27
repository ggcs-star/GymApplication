import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import GoatIcon from '../assets/images/logo.svg';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: '100%',
          opacity,
          transform: [{ translateY }],
        }}
      >
      
        <View style={styles.topSection}>
          <GoatIcon width={200} height={200} />
          <Text style={styles.title}>Welcome Back..</Text>
          <Text style={styles.subtitle}>Login to continue your journey</Text>
        </View>

        
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>

       
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      
        <Text style={styles.bottomText}>
          Don’t have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </Text>
        </Text>
      </Animated.View>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  topSection: {
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },

  inputContainer: {
    width: '100%',
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E6F5E6',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },

  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  forgotText: {
    fontSize: 12,
    color: '#2E7D32',
    fontFamily: 'Poppins-Regular',
  },

  button: {
    backgroundColor: '#6CFF1A',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  bottomText: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
  },

  link: {
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },
});