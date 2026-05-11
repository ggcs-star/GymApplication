import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import GiftIcon from '../../assets/images/gift.svg';

const rewards = [
  {
    id: 1,
    title: '25% Off Elite Diet Plans',
    description: 'Personalized nutrition strategy from pro coaches.',
    points: '500 Points',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
  },

  {
    id: 2,
    title: 'Performance Gear Voucher',
    description: '550 credit towards premium GOATFITT apparel.',
    points: '1,000 Points',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b',
  },
];

const RewardStore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Reward Store</Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {rewards.map(item => (
        <View key={item.id} style={styles.card}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />

          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.description}>{item.description}</Text>

            <TouchableOpacity style={styles.pointsBtn} activeOpacity={0.8}>
              {/* <GiftIcon
                width={16}
                height={16}
              /> */}

              <Text style={styles.pointsText}>{item.points}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RewardStore;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  heading: {
    fontSize: 22,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  viewAll: {
    color: '#2E7D32',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 22,
    borderWidth: 1.2,
    borderColor: '#EEF5EE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  image: {
    width: '100%',
    height: 180,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 24,
    color: '#222',
    lineHeight: 34,
    fontFamily: 'Poppins-Bold',
  },

  description: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 24,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  pointsBtn: {
    marginTop: 18,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#6CFF1A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pointsText: {
    marginLeft: 8,
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});
