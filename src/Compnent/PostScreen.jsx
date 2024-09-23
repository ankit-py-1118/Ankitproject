import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Video, {VideoRef} from 'react-native-video';
import Interaction from './Interaction';
import FBCollage from 'react-native-fb-collage';
import Collage from './Collage';

const PostScreen = ({item}) => {
  const videoRef = useRef(null);
  const background = require('../asset/text.mp4');

  const width = Dimensions.get('window').width;

  if (item.type === 'postwithimage') {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <FBCollage
            images={item.content}
            imageOnPress={(index, image) => {
              console.log(image, 'hereisyouimage');
              return <Image />;
            }}
          />
        </View>
        <Interaction />
      </View>
    );
  } else if (item.type === 'postwithImageVideo') {
    console.log(item, 'posfadwadf');
    return (
      <View style={styles.container}>
        {/* <Carousel
          width={width}
          data={item.content}
          autoPlay={true}
          loop
          height={200}
          renderItem={({item}) => {
            console.log(item, 'contenttype');
            return (
              <>
                {item.type === 'image' ? (
                  <Image height={200} source={{uri: item.url}} />
                ) : (
                  <Video
                    source={background}
                    ref={videoRef}
                    style={styles.backgroundVideo}
                  />
                )}
              </>
            );
          }}
        /> */}
        {/* <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <FBCollage
            images={item.content}
            imageOnPress={(index, image) => {
              console.log(image, 'hereisyouimage');
              return <Image />;
            }}
          />
        </View> */}
        <Collage content={item.content} />
        <Interaction />
      </View>
    );
  } else if (item.type === 'postwithTextImage') {
    console.log(item, 'posfadwadf');
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: 200}}
          source={{uri: item.content}}>
          <Text style={styles.heading}> {item.text} </Text>
        </ImageBackground>
        <Interaction />
      </View>
    );
  } else if (item.type === 'textonlypost') {
    console.log(item, 'posfadwadf');
    return (
      <View>
        <View style={styles.card}>
          <Text style={[styles.heading, {marginBottom: 50}]}>
            {' '}
            {item.text}{' '}
          </Text>
        </View>
        <Interaction />
      </View>
    );
  } else if (item.type === 'videopostonly') {
    console.log(item, 'posfadwadf');
    return (
      <View>
        <View style={styles.videoWrapper}>
          <Video
            source={background}
            ref={videoRef}
            style={styles.backgroundVideo}
          />
        </View>
        <Interaction />
      </View>
    );
  }
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
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
  heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    bottom: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
