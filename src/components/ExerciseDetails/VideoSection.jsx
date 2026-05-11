import React, { useState } from 'react';

import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Video from 'react-native-video';

import PlayIcon from '../../assets/images/play2.svg';

const VideoSection = ({ video, paused, setPaused }) => {
  return (
    <View style={styles.videoBox}>
      <Video
        source={video}
        style={styles.video}
        resizeMode="cover"
        paused={paused}
        repeat={true}
        controls={false}
        playInBackground={false}
        playWhenInactive={false}
        ignoreSilentSwitch="ignore"
        onLoad={data => console.log('LOADED:', data)}
        onError={err => console.log('ERROR:', err)}
        onReadyForDisplay={() => console.log('READY')}
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
  );
};

export default VideoSection;

const styles = StyleSheet.create({
  videoBox: {
    height: 200,
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
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
