import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SportCard, SportsHeader } from '../components/sports';

import FootballImage from '../assets/images/football.jpg';
import BasketballImage from '../assets/images/basketball.jpg';
import CricketImage from '../assets/images/cricket.jpg';
import TennisImage from '../assets/images/tennis.jpg';
import BadmintonImage from '../assets/images/badminton.jpg';

const sportsData = [
  {
    title: 'Football',
    subtitle: 'Master precision, power, and tactical awareness.',
    badge: '87%',
    image: FootballImage,
  },

  {
    title: 'Basketball',
    subtitle: 'Vertical leap and shooting accuracy program.',

    image: BasketballImage,
  },

  {
    title: 'Cricket',
    subtitle: 'Refine batting mechanics and bowling speed.',

    image: CricketImage,
  },

  {
    title: 'Tennis',
    subtitle: 'Improve serve consistency and court agility.',

    image: TennisImage,
  },

  {
    title: 'Badminton',
    subtitle: 'High-intensity footwork and smash velocity.',

    image: BadmintonImage,
  },
];

const SportsScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: insets.top + 10,
        paddingBottom: 90,
      }}
    >
      <SportsHeader navigation={navigation} />

      {sportsData.map((item, index) => (
        <SportCard
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          onPress={() =>
            navigation.navigate('SportsTraining', {
              sport: item.title,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

export default SportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 16,
  },
});
