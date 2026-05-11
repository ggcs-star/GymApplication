import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import ReportsIcon from '../../assets/images/reports.svg';

const TimelineItem = ({ title, subtitle, time }) => (
  <View style={styles.itemRow}>
    <View style={styles.iconBox}>
      <ReportsIcon width={22} height={22} />
    </View>

    <View style={styles.content}>
      <Text style={styles.itemTitle}>{title}</Text>

      <Text style={styles.itemSubtitle}>{subtitle}</Text>
    </View>

    <Text style={styles.time}>{time}</Text>
  </View>
);

const HealthTimeline = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Today</Text>

      <TimelineItem
        title="Blood Report Uploaded"
        subtitle="blood_report_2026.pdf"
        time="11:15 AM"
      />

      <TimelineItem
        title="Sugar Report Uploaded"
        subtitle="sugar_test_report.pdf"
        time="9:00 AM"
      />

      <Text style={styles.sectionTitle}>Yesterday</Text>

      <TimelineItem
        title="Full Body Checkup"
        subtitle="full_body_report.pdf"
        time="6:30 PM"
      />
    </View>
  );
};

export default HealthTimeline;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    color: '#111',
    marginBottom: 20,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 28,
  },

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#EAF7EA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    marginRight: 14,
  },

  content: {
    flex: 1,
    paddingRight: 10,
  },

  itemTitle: {
    fontSize: 16,
    color: '#111',
    lineHeight: 24,
    fontFamily: 'Poppins-Bold',
  },

  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
  },

  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    fontFamily: 'Poppins-Medium',
  },
});
