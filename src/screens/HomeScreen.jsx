// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';
// import LinearGradient from 'react-native-linear-gradient';

// import ProgressIcon from '../assets/images/progress.svg';
// import WorkoutIcon from '../assets/images/dumbbell1.svg';
// import SportsIcon from '../assets/images/sport.svg';
// import DietIcon from '../assets/images/apple.svg';

// import FireIcon from '../assets/images/fire.svg';
// import StepsIcon from '../assets/images/steps.svg';
// import WaterIcon from '../assets/images/water.svg';
// import ActivityIcon from '../assets/images/activity.svg';

// const HomeScreen = ({ navigation }) => {
//   const insets = useSafeAreaInsets();

//   return (
//     <ScrollView
//       style={styles.container}
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={{
//         paddingBottom: insets.bottom + 90,
//       }}
//     >
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hello Harsh 👋</Text>
//         <Text style={styles.subText}>Ready to crush your goal?</Text>
//       </View>

//       <View style={styles.scoreCard}>
//         <View>
//           <Text style={styles.scoreTitle}>Today's Fitness Score</Text>
//           <Text style={styles.scoreValue}>85/100</Text>
//           <Text style={styles.scoreSub}>+12% from yesterday</Text>
//         </View>

//         <AnimatedCircularProgress
//           size={90}
//           width={6}
//           fill={85}
//           tintColor="#2E7D32"
//           backgroundColor="#d9f5d9"
//           rotation={0}
//           lineCap="round"
//         >
//           {fill => (
//             <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
//           )}
//         </AnimatedCircularProgress>
//       </View>

//       <ImageBackground
//         source={require('../assets/images/gym.jpg')}
//         style={styles.card}
//         imageStyle={{
//           borderRadius: 20,
//           resizeMode: 'cover',
//         }}
//       >
//         <View style={styles.overlay} />

//         <View style={styles.cardContent}>
//           <View style={styles.aiRow}>
//             <ActivityIcon width={16} height={16} />
//             <Text style={styles.cardTitleWhite}>AI RECOMMENDED</Text>
//           </View>

//           <Text style={styles.cardSubtitleWhite}>Upper Body Strength</Text>

//           <Text style={styles.cardTimeWhite}>45 mins • 8 exercises</Text>

//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Start Workout</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>

//       <View style={styles.statsContainer}>
//         <View style={styles.statBox}>
//           <FireIcon width={26} height={26} />
//           <Text style={styles.statValue}>1,847</Text>
//           <Text style={styles.statLabel}>Calories</Text>
//         </View>

//         <View style={styles.statBox}>
//           <StepsIcon width={26} height={26} />
//           <Text style={styles.statValue}>8,432</Text>
//           <Text style={styles.statLabel}>Steps</Text>
//         </View>

//         <View style={styles.statBox}>
//           <WaterIcon width={26} height={26} />
//           <Text style={styles.statValue}>6/8</Text>
//           <Text style={styles.statLabel}>Water</Text>
//         </View>
//       </View>

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

//       <LinearGradient
//         colors={['#6CFF1A', '#00E676']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         style={styles.footerCard}
//       >
//         <View style={styles.footerRow}>
//           <StepsIcon width={18} height={18} />

//           <Text style={styles.footerTitle}>AI Insight</Text>
//         </View>

//         <Text style={styles.footerText}>
//           Increase your protein intake today to boost muscle recovery 
//         </Text>

//         <TouchableOpacity style={styles.footerButton}>
//           <Text style={styles.footerButtonText}>View Tips</Text>
//         </TouchableOpacity>
//       </LinearGradient>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FFF5',
//     paddingHorizontal: 20,
//   },

//   header: {
//     marginTop: 20,
//     marginBottom: 15,
//   },

//   greeting: {
//     fontSize: 22,
//     fontFamily: 'Poppins-Bold',
//   },

//   subText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//     fontFamily: 'Poppins-Regular',
//   },

//   scoreCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#E6F5E6',
//     padding: 20,
//     borderRadius: 16,
//     marginBottom: 15,
//   },

//   scoreTitle: {
//     fontSize: 14,
//     color: '#666',
//     fontFamily: 'Poppins-Regular',
//   },

//   scoreValue: {
//     fontSize: 22,
//     fontFamily: 'Poppins-Bold',
//     color: '#2E7D32',
//   },

//   scoreSub: {
//     fontSize: 12,
//     color: '#888',
//     fontFamily: 'Poppins-Regular',
//   },

//   card: {
//     height: 210,
//     borderRadius: 20,
//     overflow: 'hidden',
//     marginBottom: 15,
//   },

//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },

//   cardContent: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },

//   button: {
//     backgroundColor: '#6CFF1A',
//     padding: 12,
//     borderRadius: 10,
//     marginTop: 15,
//     alignItems: 'center',
//   },

//   buttonText: {
//     fontFamily: 'Poppins-Bold',
//   },

//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },

//   statBox: {
//     backgroundColor: '#E6F5E6',
//     flex: 1,
//     marginHorizontal: 5,
//     padding: 15,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderWidth: 1.5,
//     borderColor: '#2E7D32',
//   },

//   statValue: {
//     fontSize: 18,
//     fontFamily: 'Poppins-Bold',
//   },

//   statLabel: {
//     fontSize: 14,
//     color: '#666',
//     fontFamily: 'Poppins-Regular',
//   },

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

//   progressText: {
//     fontSize: 18,
//     fontFamily: 'Poppins-Bold',
//     color: '#2E7D32',
//   },

//   cardTitleWhite: {
//     fontSize: 12,
//     color: '#6CFF1A',
//     fontFamily: 'Poppins-Regular',
//   },

//   cardSubtitleWhite: {
//     fontSize: 20,
//     fontFamily: 'Poppins-Bold',
//     color: '#fff',
//     marginTop: 5,
//   },

//   cardTimeWhite: {
//     fontSize: 13,
//     color: '#fff',
//     marginTop: 5,
//     fontFamily: 'Poppins-Regular',
//   },

//   aiRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//     marginBottom: 2,
//   },

//   footerCard: {
  
//     padding: 18,
//     borderRadius: 16,
//     marginTop: 15,
//     marginBottom: 10,

//     borderWidth: 1,
//     borderColor: '#0a0c0a',

//     shadowColor: '#2E7D32',
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     elevation: 3,
//   },

//   footerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//     marginBottom: 8,
//   },

//   footerTitle: {
//     fontSize: 14,
//     fontFamily: 'Poppins-Bold',
//     color: '#ooo',
//   },

//   footerText: {
//     fontSize: 13,
//     color: '#444',
//     lineHeight: 18,
//     fontFamily: 'Poppins-Regular',
//   },

//   footerButton: {
//     marginTop: 12,
//     alignSelf: 'flex-start',
//     backgroundColor: '#6CFF1A',
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },

//   footerButtonText: {
//     fontSize: 12,
//     fontFamily: 'Poppins-Bold',
//     color: '#1A1A1A',
//   },
// });






import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../components/home/Header';
import ScoreCard from '../components/home/ScoreCard';
import WorkoutCard from '../components/home/WorkoutCard';
import StatsCard from '../components/home/StatsCard';
import QuickActions from '../components/home/QuickActions';
import FooterCard from '../components/home/FooterCard';
import StreakCard from '../components/home/StreakCard';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: insets.bottom + 90 }}
    >
      <Header />
      <ScoreCard />
      <WorkoutCard />
      <StatsCard />
      <StreakCard/>
      <QuickActions />
      <FooterCard />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },
});