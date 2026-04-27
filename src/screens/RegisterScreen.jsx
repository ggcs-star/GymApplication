import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import GoatIcon from '../assets/images/logo.svg';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity,
            transform: [{ translateY }],
          },
        ]}
      >
        
        <View style={styles.topSection}>
          <GoatIcon width={200} height={200} />
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Start your fitness journey today
          </Text>
        </View>

      
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

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

      
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        
        <Text style={styles.bottomText}>
          Already have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    padding: 20,
    justifyContent: 'center', 
  },

  content: {
    width: '100%',
  },

  topSection: {
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginTop: 8,
  },

  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E6F5E6',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontFamily: 'Poppins-Regular',
  },

  button: {
    backgroundColor: '#6CFF1A',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  bottomText: {
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
  },

  link: {
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },
});