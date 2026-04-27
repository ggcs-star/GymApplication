// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import Video from 'react-native-video';
// import { useState } from 'react';

// import { useRoute, useNavigation } from '@react-navigation/native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import BackIcon from '../assets/images/back.svg';
// import PlayIcon from '../assets/images/play2.svg';

// import RepeatIcon from '../assets/images/repeat.svg';
// import ClockIcon from '../assets/images/clock.svg';
// import LevelIcon from '../assets/images/lavel.svg';

// const ExerciseDetailScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const insets = useSafeAreaInsets();
//   const [paused, setPaused] = useState(true);

//   const { item } = route.params;

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingBottom: insets.bottom + 40,
//         }}
//       >
//         <TouchableOpacity
//           style={[styles.backBtn, { marginTop: insets.top + 10 }]}
//           onPress={() => navigation.goBack()}
//         >
//           <BackIcon width={22} height={22} />
//         </TouchableOpacity>

//         <Text style={styles.title}>{item.name}</Text>
//         <Text style={styles.target}>Target: {item.target}</Text>

//         <View style={styles.videoBox}>
//           <TouchableOpacity
//             activeOpacity={1}
//             onPress={() => setPaused(!paused)}
//             style={{ flex: 1 }}
//           >
//             <Video
//               source={
//                 typeof item.video === 'number'
//                   ? item.video
//                   : { uri: item.video }
//               }
//               style={styles.video}
//               resizeMode="cover"
//               paused={paused}
//               repeat={true}
//               controls={true}
//             />

//             {paused && (
//               <View style={styles.playBtn}>
//                 <PlayIcon width={22} height={22} />
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>

//         <View style={styles.statsRow}>
//           <StatBox
//             Icon={RepeatIcon}
//             value={`${item.sets} x ${item.reps}`}
//             label="Sets x Reps"
//           />

//           <StatBox Icon={ClockIcon} value="60s" label="Rest Time" />

//           <StatBox Icon={LevelIcon} value="Advanced" label="Level" />
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Step-by-Step Instructions</Text>

//           {item.instructions?.map((step, index) => (
//             <Text key={index} style={styles.bullet}>
//               {index + 1}. {step}
//             </Text>
//           ))}
//         </View>

//         <View style={[styles.section, styles.errorBox]}>
//           <Text style={styles.sectionTitle}>Common Mistakes</Text>

//           {item.mistakes?.map((m, i) => (
//             <Text key={i} style={styles.bullet}>
//               • {m}
//             </Text>
//           ))}
//         </View>

//         <View style={[styles.section, styles.tipBox]}>
//           <Text style={styles.sectionTitle}>Pro Tips</Text>

//           {item.tips?.map((t, i) => (
//             <Text key={i} style={styles.bullet}>
//               • {t}
//             </Text>
//           ))}
//         </View>

//         <TouchableOpacity style={styles.startBtn}>
//           <Text style={styles.startText}>Start Workout</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.skipBtn}>
//           <Text style={styles.skipText}>Skip Exercise →</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default ExerciseDetailScreen;

// const StatBox = ({ Icon, value, label }) => (
//   <View style={styles.statBox}>
//     <Icon width={26} height={26} />

//     <Text style={styles.statValue}>{value}</Text>
//     <Text style={styles.statLabel}>{label}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FFF5',
//     paddingHorizontal: 20,
//   },

//   backBtn: {
//     marginBottom: 10,
//   },

//   title: {
//     fontSize: 20,
//     fontFamily: 'Poppins-Bold',
//   },

//   target: {
//     fontSize: 13,
//     color: '#2E7D32',
//     marginBottom: 15,
//     fontFamily: 'Poppins-Regular',
//   },

//   videoBox: {
//     height: 200,
//     borderRadius: 16,
//     overflow: 'hidden',
//     marginBottom: 15,
//   },

//   image: {
//     width: '100%',
//     height: '100%',
//   },

//   playBtn: {
//     position: 'absolute',
//     alignSelf: 'center',
//     top: '40%',
//     backgroundColor: '#6CFF1A',
//     padding: 12,
//     borderRadius: 30,
//   },

//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },

//   statBox: {
//     flex: 1,
//     backgroundColor: '#E6F5E6',
//     marginHorizontal: 5,
//     padding: 15,
//     borderRadius: 12,

//     alignItems: 'flex-start', 

//     borderWidth: 1.5,
//     borderColor: '#2E7D32', 
//   },

//   statValue: {
//     fontSize: 18,
//     fontFamily: 'Poppins-Bold',
//     marginTop: 6,
//   },

//   statLabel: {
//     fontSize: 14,
//     color: '#666',
//     fontFamily: 'Poppins-Regular',
//   },

//   section: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     borderRadius: 14,
//     marginBottom: 12,
//   },

//   errorBox: {
//     backgroundColor: '#FFEAEA',
//   },

//   tipBox: {
//     backgroundColor: '#E6F5E6',
//   },

//   sectionTitle: {
//     fontFamily: 'Poppins-Bold',
//     marginBottom: 8,
//     fontSize: 14,
//   },

//   bullet: {
//     fontSize: 13,
//     marginBottom: 5,
//     fontFamily: 'Poppins-Regular',
//     color: '#333',
//   },

//   startBtn: {
//     backgroundColor: '#6CFF1A',
//     padding: 15,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   startText: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: 14,
//   },

//   skipBtn: {
//     alignItems: 'center',
//     marginTop: 12,
//   },

//   skipText: {
//     color: '#666',
//     fontFamily: 'Poppins-Regular',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#000',
//   },
// });







import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '../assets/images/back.svg';

import {
  VideoSection,
  StatsRow,
  InfoSection,
  ButtonsSection,
} from '../components/ExerciseDetails';

const ExerciseDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [paused, setPaused] = useState(true);

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 40,
        }}
      >
        <TouchableOpacity
          style={[styles.backBtn, { marginTop: insets.top + 10 }]}
          onPress={() => navigation.goBack()}
        >
          <BackIcon width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.target}>Target: {item.target}</Text>

        <VideoSection
          video={item.video}
          paused={paused}
          setPaused={setPaused}
        />

        <StatsRow item={item} />

        <InfoSection
          title="Step-by-Step Instructions"
          data={item.instructions}
          type="steps"
        />

        <InfoSection
          title="Common Mistakes"
          data={item.mistakes}
          type="error"
        />

        <InfoSection
          title="Pro Tips"
          data={item.tips}
          type="tip"
        />

        <ButtonsSection />
      </ScrollView>
    </View>
  );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },
  backBtn: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  target: {
    fontSize: 13,
    color: '#2E7D32',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },
});