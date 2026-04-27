// import React from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import Video, { ViewType } from 'react-native-video';
// import PlayIcon from '../../assets/images/play2.svg';

// const VideoSection = ({ video, paused, setPaused }) => {
//   return (
//     <View style={styles.videoBox}>
//       <TouchableOpacity
//         activeOpacity={1}
//         onPress={() => setPaused(!paused)}
//         style={styles.touchable}
//       >
//         <Video
//           source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
//           style={styles.video}
//           resizeMode="cover"
//           paused={paused}
//           viewType={ViewType.TEXTURE}
//           onLoad={data => console.log('LOADED:', data)}
//           onError={err => console.log('ERROR:', err)}
//           onReadyForDisplay={() => console.log('READY')}
//         />
//         {paused && (
//           <View style={styles.playBtn}>
//             <PlayIcon width={22} height={22} />
//           </View>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default VideoSection;

// const styles = StyleSheet.create({
//   videoBox: {
//     height: 200,
//     marginBottom: 15,
//     borderRadius: 16,
//      overflow: 'hidden',
//   },
//   touchable: {
//     width: '100%',
//     height: 200,
//   },
//   video: {
//     width: '100%',
//     height: 200,
//   },
//   playBtn: {
//     position: 'absolute',
//     alignSelf: 'center',
//     top: '40%',
//     backgroundColor: '#6CFF1A',
//     padding: 12,
//     borderRadius: 30,
//   },
// });





import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import PlayIcon from '../../assets/images/play2.svg';
import VideoPlayer from 'react-native-video-controls';

const VideoSection = ({ video, paused, setPaused }) => {
  return (
    <View style={styles.videoBox}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setPaused(!paused)}
        style={styles.touchable}
      >
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          style={styles.video}
          resizeMode="cover"
          paused={paused}
          useTextureView={true}   
          onLoad={data => console.log('LOADED:', data)}
          onError={err => console.log('ERROR:', err)}
          onReadyForDisplay={() => console.log('READY')}
        />

        {/* <VideoPlayer
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
           style={styles.video}
        /> */}
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
  },
  touchable: {
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
  },
  playBtn: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
    backgroundColor: '#6CFF1A',
    padding: 12,
    borderRadius: 30,
  },
});
