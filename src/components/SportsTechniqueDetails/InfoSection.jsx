import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import InstructionIcon from '../../assets/images/instruction.svg';

import AlertIcon from '../../assets/images/alert.svg';

import TipsIcon from '../../assets/images/tips.svg';

const getIcon = type => {
  switch (type) {
    case 'steps':
      return InstructionIcon;

    case 'error':
      return AlertIcon;

    case 'tip':
      return TipsIcon;

    default:
      return InstructionIcon;
  }
};

const InfoSection = ({ title, data, type }) => {
  const Icon = getIcon(type);

  return (
    <View
      style={[
        styles.section,

        type === 'error' && styles.errorBox,

        type === 'tip' && styles.tipBox,
      ]}
    >
      <View style={styles.titleRow}>
        <Icon width={20} height={20} />

        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      {data?.map((item, index) => (
        <Text key={index} style={styles.bullet}>
          {type === 'steps' ? `${index + 1}.` : '•'} {item}
        </Text>
      ))}
    </View>
  );
};

export default InfoSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#EFF6FF',
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
  },

  errorBox: {
    backgroundColor: '#FFEAEA',
  },

  tipBox: {
    backgroundColor: '#E6F5E6',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginLeft: 6,
  },

  bullet: {
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 6,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
});
