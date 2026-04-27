// import React, { useRef, useEffect } from 'react';
// import { View, StyleSheet, Animated, Dimensions, Easing } from 'react-native';
// import LogoIcon from '../assets/images/logo.svg';
// import DumbbellIcon from '../assets/images/dumbbell.svg';

// const { height } = Dimensions.get('window');

// const SplashScreen = ({ navigation }) => {
//   const moveAnim = useRef(new Animated.Value(height)).current;
//   const opacity = useRef(new Animated.Value(0)).current;
//   const scale = useRef(new Animated.Value(0.9)).current;

//   useEffect(() => {
//     Animated.sequence([
//       Animated.parallel([
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration: 600,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scale, {
//           toValue: 1,
//           duration: 600,
//           easing: Easing.out(Easing.ease),
//           useNativeDriver: true,
//         }),
//       ]),

//       Animated.delay(300),

//       Animated.timing(moveAnim, {
//         toValue: -height * 0.55,
//         duration: 3500,
//         easing: Easing.out(Easing.cubic),
//         useNativeDriver: true,
//       }),

//       Animated.delay(300),
//     ]).start(() => {
//       navigation.replace('Welcome');
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.wrapper,
//           {
//             transform: [{ translateY: moveAnim }, { scale: scale }],
//             opacity: opacity,
//           },
//         ]}
//       >
//         <LogoIcon width={220} height={220} style={{ marginBottom: -15 }} />

//         <View style={styles.line} />

//         <DumbbellIcon
//           width={70}
//           height={70}
//           style={[styles.dumbbell, { marginTop: -45 }]}
//         />
//       </Animated.View>
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FFF5',
//   },

//   wrapper: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     alignItems: 'center',
//   },

//   logo: {
//     width: 220,
//     height: 220,
//     resizeMode: 'contain',
//   },

//   line: {
//     width: 3,
//     height: 360,
//     backgroundColor: '#000',
//   },

//   dumbbell: {
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//     marginTop: 5,
//     marginBottom: 30,
//   },
// });





import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import LogoIcon from '../assets/images/logo.svg';

const SplashScreen = ({ navigation }) => {
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.sequence([
    
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 800,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]),

     
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -8,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),

    
      Animated.delay(300),

      
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 3, 
          duration: 600,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      navigation.replace('Welcome');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity,
            transform: [{ scale }, { translateY }],
          },
        ]}
      >
        <LogoIcon width={250} height={250} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});