import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import UserIcon from '../../assets/images/user.svg';

import PencilIcon from '../../assets/images/pencil1.svg';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <UserIcon width={38} height={38} />
      </View>

      <Text style={styles.name}>Harsh Chauhan</Text>

      <Text style={styles.email}>harsh@email.com</Text>

      <TouchableOpacity
        style={styles.badge}
        onPress={() => console.log('Edit Profile')}
      >
        <PencilIcon width={16} height={16} />

        <Text style={styles.badgeText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#6CFF1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  name: {
    fontSize: 24,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  email: {
    marginTop: 4,
    fontSize: 13,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  badge: {
    marginTop: 14,
    backgroundColor: '#E6F5E6',
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
  },

  badgeText: {
    color: '#2E7D32',
    fontSize: 12,
    marginLeft: 8,
    fontFamily: 'Poppins-Bold',
  },
});
