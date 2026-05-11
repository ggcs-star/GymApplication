// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.greeting}>Hello Harsh 👋</Text>
//       <Text style={styles.subText}>Ready to crush your goal?</Text>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   header: {
//     marginTop: 20,
//     marginBottom: 15,
//   },

//   greeting: {
//     fontSize: 22,
//     fontFamily: 'Poppins-Bold',
//     color: '#1A1A1A',
//   },

//   subText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//     fontFamily: 'Poppins-Regular',
//   },
// });



import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ProfileIcon from '../../assets/images/user.svg';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello Harsh 👋</Text>

        <Text style={styles.subText}>Ready to crush your goal?</Text>
      </View>

      <TouchableOpacity
        style={styles.profileBtn}
        onPress={() => navigation.navigate('User')}
      >
        <ProfileIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },

  profileBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E6F5E6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },
});
