import React, {
  useState,
} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';

import PlayIcon from '../../assets/images/play2.svg';

const TrainingVideoCard = ({
  item,
}) => {

  const [paused, setPaused] =
    useState(true);

  return (
    <View style={styles.videoBox}>

      <Video
        source={item.video}
        style={styles.video}
        resizeMode="cover"
        paused={paused}
        repeat={true}
        controls={false}
        surfaceType="surface"
      />

      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={() =>
          setPaused(!paused)
        }
      >

        {paused && (

          <View style={styles.playBtn}>

            <PlayIcon
              width={24}
              height={24}
            />

          </View>

        )}

      </TouchableOpacity>

    </View>
  );
};

export default TrainingVideoCard;

const styles = StyleSheet.create({
  videoBox: {
    height: 220,

    borderRadius: 20,

    overflow: 'hidden',

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
    backgroundColor:
      '#6CFF1A',

    padding: 16,

    borderRadius: 40,
  },
});