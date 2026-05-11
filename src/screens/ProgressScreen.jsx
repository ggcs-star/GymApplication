import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {
  StatCard,
  SectionCard,
  WeightChart,
  CaloriesCard,
  DailyStepsCard,
  FooterQuoteCard,
} from '../components/progress';

import BackIcon from '../assets/images/back.svg';

const ProgressScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: insets.top + 10,
        paddingBottom: insets.bottom + 40,
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        >
          <BackIcon width={24} height={24} />
        </TouchableOpacity>

        <Text style={styles.heading}>Progress & Analytics</Text>
        <Text style={styles.subheading}>Track your fitness journey</Text>
      </View>

      <View style={styles.row}>
        <StatCard
          title="Weight Loss"
          value="-1.5 kg"
          subtitle="This week"
          color="#2E7D32"
          type="weight"
        />
        <StatCard
          title="Goal Progress"
          value="23%"
          subtitle="To target"
          color="#C76D3D"
          type="goal"
        />
      </View>

      <View style={styles.row}>
        <StatCard
          title="Active Days"
          value="24/30"
          subtitle="This month"
          color="#3D64C7"
          type="days"
        />
        <StatCard
          title="Avg Workout"
          value="42 min"
          subtitle="Per session"
          color="#6F3B9D"
          type="progress"
        />
      </View>

      <SectionCard>
        <WeightChart />
      </SectionCard>

      <SectionCard>
        <CaloriesCard />
      </SectionCard>

      <SectionCard>
        <DailyStepsCard />
      </SectionCard>

      <FooterQuoteCard />
    </ScrollView>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 20,
  },

  header: {
    marginBottom: 20,
  },

  backIcon: {
    marginBottom: 10,
  },

  heading: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#1A1A1A',
  },

  subheading: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
