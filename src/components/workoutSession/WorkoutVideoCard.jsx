import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Video from 'react-native-video';

import PlayIcon from '../../assets/images/play2.svg';

const WorkoutVideoCard = ({ item }) => {
  const [paused, setPaused] = useState(true);

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.title}>{item.name}</Text>
      </View>

      <View style={styles.videoBox}>
        <Video
          source={item.video}
          style={styles.video}
          resizeMode="cover"
          paused={paused}
          repeat={true}
          controls={false}
          playInBackground={false}
          playWhenInactive={false}
          ignoreSilentSwitch="ignore"
          surfaceType="surface"
        />

        <TouchableOpacity
          activeOpacity={1}
          style={styles.overlay}
          onPress={() => setPaused(!paused)}
        >
          {paused && (
            <View style={styles.playBtn}>
              <PlayIcon width={22} height={22} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutVideoCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 12,
  },

  title: {
    flex: 1,
    fontSize: 24,
    color: '#111',
    fontFamily: 'Poppins-Bold',
  },

  badge: {
    backgroundColor: '#DDF5DD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    color: '#2E7D32',
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
  },

  videoBox: {
    height: 220,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 24,
  },

  video: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  playBtn: {
    backgroundColor: '#6CFF1A',
    padding: 14,
    borderRadius: 40,
  },
});
