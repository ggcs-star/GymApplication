// import React, { useState } from 'react';

// import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { useNavigation } from '@react-navigation/native';

// import {
//   HealthHeader,
//   HealthSummaryCard,
//   HealthStatCards,
//   HealthTabs,
//   HealthTimeline,
// } from '../components/health';

// import AddIcon from '../assets/images/add1.svg';

// const HealthScreen = () => {
//   const insets = useSafeAreaInsets();

//   const navigation = useNavigation();

//   const [activeTab, setActiveTab] = useState('summary');

//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView
//         style={styles.container}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingTop: insets.top + 10,
//           paddingBottom: 120,
//         }}
//       >
//         <HealthHeader />

//         <HealthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

//         {activeTab === 'summary' ? (
//           <>
//             <HealthSummaryCard />

//             <HealthStatCards />
//           </>
//         ) : (
//           <>
//             <HealthTimeline />
//           </>
//         )}
//       </ScrollView>

//       <TouchableOpacity
//         style={styles.floatingBtn}
//         activeOpacity={0.8}
//         onPress={() => navigation.navigate('UploadReport')}
//       >
//         <AddIcon width={24} height={24} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HealthScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FFF5',
//     paddingHorizontal: 20,
//   },

//   floatingBtn: {
//     position: 'absolute',
//     right: 30,
//     bottom: 145,
//     width: 50,
//     height: 50,
//     borderRadius: 30,
//     backgroundColor: '#2E7D32',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#848684',
//     zIndex: 999,
//     elevation: 15,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 8,
//   },
// });

import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import { TabView, SceneMap } from 'react-native-tab-view';

import {
  HealthHeader,
  HealthSummaryCard,
  HealthStatCards,
  HealthTabs,
  HealthTimeline,
} from '../components/health';

import AddIcon from '../assets/images/add1.svg';

const SummaryRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: 140,
      paddingHorizontal: 20,
    }}
  >
    <HealthSummaryCard />

    <HealthStatCards />
  </ScrollView>
);

const TimelineRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: 120,
      paddingHorizontal: 20,
    }}
  >
    <HealthTimeline />
  </ScrollView>
);

const renderScene = SceneMap({
  summary: SummaryRoute,
  timeline: TimelineRoute,
});

const initialLayout = {
  width: Dimensions.get('window').width,
};

const HealthScreen = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: 'summary',
      title: 'Summary',
    },
    {
      key: 'timeline',
      title: 'Health Timeline',
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top + 10,
          },
        ]}
      >
        <HealthHeader />

        <HealthTabs
          activeTab={routes[index].key}
          setActiveTab={tab => {
            const newIndex = routes.findIndex(item => item.key === tab);

            setIndex(newIndex);
          }}
        />
      </View>

      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        swipeEnabled={true}
        renderTabBar={() => null}
        style={{
          flex: 1,
          backgroundColor: '#F8FFF5',
        }}
      />

      <TouchableOpacity
        style={styles.floatingBtn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('UploadReport')}
      >
        <AddIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default HealthScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },

  floatingBtn: {
    position: 'absolute',
    right: 30,
    bottom: 145,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#848684',
    zIndex: 999,
    elevation: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
});
