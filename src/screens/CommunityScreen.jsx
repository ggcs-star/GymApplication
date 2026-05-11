import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  CommunityHeader,
  ChallengeCard,
  FeedCard,
  LeaderboardCard,
} from '../components/community';

import challenges from '../data/challenges';
import feedData from '../data/feedData';
import leaderboardData from '../data/leaderboardData';

const CommunityScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 120,
      }}
    >
      <CommunityHeader />
      <LeaderboardCard data={leaderboardData.slice(0, 3)} showViewAll={true} />

      <Text style={styles.section}>Active Challenges</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -15 }}
        contentContainerStyle={{
          paddingLeft: 15,
          paddingRight: 5,
        }}
      >
        {challenges.map(item => (
          <ChallengeCard
            key={item.id}
            title={item.title}
            participants={item.participants}
            days={item.days}
            bgColor={item.bgColor}
            btnColor={item.btnColor}
          />
        ))}
      </ScrollView>

      <Text style={styles.section}>Community Feed</Text>

      {feedData.map(item => (
        <FeedCard
          key={item.id}
          name={item.name}
          text={item.text}
          likes={item.likes}
          comments={item.comments}
          image={item.image}
          time={item.time}
          shares={item.shares}
          postImage={item.postImage}
          badge={item.badge}
        />
      ))}
    </ScrollView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    padding: 15,
  },

  section: {
    fontFamily: 'Poppins-Bold',
    marginVertical: 10,
    color: '#1A1A1A',
  },
});
