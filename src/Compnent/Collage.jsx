import React, {useRef} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Video from 'react-native-video';

const Collage = ({content}) => {
  const videoRef = useRef(null);
  const background = require('../asset/text.mp4');

  console.log(content, 'hereisthecontent');
  return (
    <View style={styles.collageContainer}>
      <View style={styles.row}>
        <Image source={{uri: content[0].url}} style={styles.image} />
        <Image source={{uri: content[1].url}} style={styles.image} />
      </View>
      <View style={styles.row}>
        <Image source={{uri: content[2].url}} style={styles.image} />

        {content[3].type === 'video' ? (
          <View style={styles.videoWrapper}>
            <Video
              source={background}
              ref={videoRef}
              style={styles.backgroundVideo}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  collageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoWrapper: {
    height: 200,
  },
});

export default Collage;
