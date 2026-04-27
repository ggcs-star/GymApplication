// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import WorkoutIcon from '../../assets/images/dumbbell1.svg';
// import DietIcon from '../../assets/images/apple.svg';
// import SportsIcon from '../../assets/images/sport.svg';
// import ProgressIcon from '../../assets/images/progress.svg';

// const QuickActions = () => {
//   const navigation = useNavigation();

//   return (
//     <>
//       <Text style={styles.sectionTitle}>Quick Actions</Text>

//       <View style={styles.actionsContainer}>
//         <TouchableOpacity
//           style={styles.actionCard}
//           activeOpacity={0.8}
//           onPress={() => navigation.navigate('Workout')}
//         >
//           <View style={styles.iconCircle}>
//             <WorkoutIcon width={20} height={20} />
//           </View>
//           <Text style={styles.actionTitle}>Workout</Text>
//           <Text style={styles.actionSub}>Start training</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.actionCard}
//           activeOpacity={0.8}
//           onPress={() => navigation.navigate('Diet')}
//         >
//           <View style={[styles.iconCircle, { backgroundColor: '#f5dfdb' }]}>
//             <DietIcon width={20} height={20} />
//           </View>
//           <Text style={styles.actionTitle}>Diet Plan</Text>
//           <Text style={styles.actionSub}>View meals</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.actionCard}
//           activeOpacity={0.8}
//           onPress={() => navigation.navigate('Sports')}
//         >
//           <View style={[styles.iconCircle, { backgroundColor: '#c7dae7' }]}>
//             <SportsIcon width={20} height={20} />
//           </View>
//           <Text style={styles.actionTitle}>Sports</Text>
//           <Text style={styles.actionSub}>Train Skills</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.actionCard}
//           activeOpacity={0.8}
//           onPress={() => navigation.navigate('Progress')}
//         >
//           <View style={[styles.iconCircle, { backgroundColor: '#F3E5F5' }]}>
//             <ProgressIcon width={20} height={20} />
//           </View>
//           <Text style={styles.actionTitle}>Progress</Text>
//           <Text style={styles.actionSub}>Track stats</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// export default QuickActions;

// const styles = StyleSheet.create({
//   sectionTitle: {
//     fontSize: 16,
//     fontFamily: 'Poppins-Bold',
//     marginBottom: 10,
//   },

//   actionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },

//   actionCard: {
//     width: '48%',
//     backgroundColor: '#E6F5E6',
//     padding: 15,
//     borderRadius: 15,
//     marginBottom: 10,
//   },

//   iconCircle: {
//     width: 35,
//     height: 35,
//     borderRadius: 18,
//     backgroundColor: '#b0dab0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },

//   actionTitle: {
//     fontSize: 18,
//     fontFamily: 'Poppins-Medium',
//   },

//   actionSub: {
//     fontSize: 12,
//     color: '#666',
//     fontFamily: 'Poppins-Regular',
//   },
// });





import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WorkoutIcon from '../../assets/images/dumbbell1.svg';
import DietIcon from '../../assets/images/apple.svg';
import SportsIcon from '../../assets/images/sport.svg';
import ProgressIcon from '../../assets/images/progress.svg';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const QuickActions = () => {
  const navigation = useNavigation();

  
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;
  const scale3 = useRef(new Animated.Value(1)).current;
  const scale4 = useRef(new Animated.Value(1)).current;

  const pressIn = (scale) => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = (scale) => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsContainer}>

        <AnimatedTouchable
          style={[styles.actionCard, { transform: [{ scale: scale1 }] }]}
          activeOpacity={0.8}
          onPressIn={() => pressIn(scale1)}
          onPressOut={() => pressOut(scale1)}
          onPress={() => navigation.navigate('Workout')}
        >
          <View style={styles.iconCircle}>
            <WorkoutIcon width={20} height={20} />
          </View>
          <Text style={styles.actionTitle}>Workout</Text>
          <Text style={styles.actionSub}>Start training</Text>
        </AnimatedTouchable>

        <AnimatedTouchable
          style={[styles.actionCard, { transform: [{ scale: scale2 }] }]}
          activeOpacity={0.8}
          onPressIn={() => pressIn(scale2)}
          onPressOut={() => pressOut(scale2)}
          onPress={() => navigation.navigate('Diet')}
        >
          <View style={[styles.iconCircle, { backgroundColor: '#f5dfdb' }]}>
            <DietIcon width={20} height={20} />
          </View>
          <Text style={styles.actionTitle}>Diet Plan</Text>
          <Text style={styles.actionSub}>View meals</Text>
        </AnimatedTouchable>

        <AnimatedTouchable
          style={[styles.actionCard, { transform: [{ scale: scale3 }] }]}
          activeOpacity={0.8}
          onPressIn={() => pressIn(scale3)}
          onPressOut={() => pressOut(scale3)}
          onPress={() => navigation.navigate('Sports')}
        >
          <View style={[styles.iconCircle, { backgroundColor: '#c7dae7' }]}>
            <SportsIcon width={20} height={20} />
          </View>
          <Text style={styles.actionTitle}>Sports</Text>
          <Text style={styles.actionSub}>Train Skills</Text>
        </AnimatedTouchable>

        <AnimatedTouchable
          style={[styles.actionCard, { transform: [{ scale: scale4 }] }]}
          activeOpacity={0.8}
          onPressIn={() => pressIn(scale4)}
          onPressOut={() => pressOut(scale4)}
          onPress={() => navigation.navigate('Progress')}
        >
          <View style={[styles.iconCircle, { backgroundColor: '#F3E5F5' }]}>
            <ProgressIcon width={20} height={20} />
          </View>
          <Text style={styles.actionTitle}>Progress</Text>
          <Text style={styles.actionSub}>Track stats</Text>
        </AnimatedTouchable>

      </View>
    </>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },

  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  actionCard: {
    width: '48%',
    backgroundColor: '#E6F5E6',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#b0dab0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  actionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },

  actionSub: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});