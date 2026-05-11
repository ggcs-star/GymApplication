import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { launchImageLibrary } from 'react-native-image-picker';

import BackIcon from '../assets/images/back.svg';

import AddIcon from '../assets/images/plus.svg';

const UploadReportScreen = () => {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const [file, setFile] = useState(null);

  const chooseFile = async () => {
    launchImageLibrary(
      {
        mediaType: 'mixed',
        selectionLimit: 1,
      },

      response => {
        if (response.didCancel) {
          console.log('Cancelled');
        } else if (response.errorCode) {
          console.log(response.errorMessage);
        } else {
          const selectedFile = response.assets[0];

          setFile(selectedFile);

          console.log(selectedFile);
        }
      },
    );
  };

  const handleUpload = () => {
    if (!file) {
      Alert.alert('Please choose a file first');

      return;
    }

    Alert.alert('File Uploaded Successfully');

    console.log(file);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={24} height={24} />
        </TouchableOpacity>

        <Text style={styles.title}>My Health Reports</Text>
      </View>

      <Text style={styles.description}>
        Upload your medical documents and unlock valuable insights.
        {'\n'}
        We support Lab Reports, Prescriptions, Discharge Summaries, and more.
      </Text>

      <TouchableOpacity
        style={styles.chooseBtn}
        activeOpacity={0.8}
        onPress={chooseFile}
      >
        <AddIcon width={24} height={24} />

        <Text style={styles.chooseText}>
          {file ? file.fileName || 'Selected File' : 'Choose File'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.uploadBtn,
          {
            bottom: insets.bottom + 20,
          },
        ]}
        activeOpacity={0.8}
        onPress={handleUpload}
      >
        <Text style={styles.uploadText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    marginLeft: 12,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 28,
    fontFamily: 'Poppins-Regular',
  },

  chooseBtn: {
    height: 58,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  chooseText: {
    fontSize: 17,
    color: '#111',
    marginLeft: 12,
    fontFamily: 'Poppins-Medium',
  },

  uploadBtn: {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: '#6CFF1A',
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});
