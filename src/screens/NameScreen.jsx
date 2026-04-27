import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';
import PencilIcon from '../assets/images/pencil.svg';

const NameScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <TopBar navigation={navigation} step={1} />

      <View style={styles.centerWrapper}>
        <View style={styles.centerContent}>
          
          <PencilIcon width={40} height={40} style={styles.icon} />

          <Text style={styles.title}>What is your name?</Text>

          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <CustomButton onPress={() => navigation.navigate('Age')} />
    </KeyboardAvoidingView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    padding: 20,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },

  progressContainer: {
    flex: 1,
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },

  progressFill: {
    width: '20%',
    height: 5,
    backgroundColor: '#6CFF1A',
    borderRadius: 5,
  },

  centerWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60,
  },

  centerContent: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 134,
    color: '#1A1A1A',
    fontFamily: 'Poppins-Regular'
  },

  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#555',
    paddingVertical: 8,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'

  },

  
});
