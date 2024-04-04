import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Animated, Image, Text } from 'react-native';
import Video from 'react-native-video';

const SplashScreen = ({ navigation }) => {
  const slideInFromRight = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const slideInFromRight2 = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const fadeAnimTopImage = useRef(new Animated.Value(0)).current;
  const slideInFromLeft = useRef(new Animated.Value(-Dimensions.get('window').width)).current;
  const slideInFromLeft2 = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

  useEffect(() => {

    Animated.parallel([
      Animated.timing(
        slideInFromRight,
        {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        slideInFromRight2,
        {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        fadeAnimTopImage,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        slideInFromLeft,
        {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        slideInFromLeft2,
        {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }
      ),
    ]).start();

    // Navigation after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);

  }, [slideInFromRight, fadeAnimTopImage, slideInFromLeft, slideInFromRight2, slideInFromLeft2]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require('./../../assets/images/righttopbg.png')}
        style={[
          styles.image,
          { alignSelf: 'flex-end', transform: [{ translateX: slideInFromRight }], opacity: fadeAnimTopImage },
        ]}
      />


      <View style={styles.centerText}>
        <Animated.Image
          source={require('../../assets/images/splash_images_horizontal.png')}
          style={{ width: '60%', height: '30%', marginBottom: 8, marginTop: 8, transform: [{ translateX: slideInFromRight2 }] }}
        />
        <Animated.Text style={{ color: '#000', fontSize: 18, transform: [{ translateX: slideInFromLeft2 }] }}>Bringing Urdu into Digital Age</Animated.Text>
      </View>


      <Animated.Image
        source={require('./../../assets/images/leftbottombg.png')}
        style={[
          styles.image,
          { transform: [{ translateX: slideInFromLeft }] },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    flex: 0.5,
    resizeMode: 'cover',
  },
  centerText: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  video: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 200,
    marginTop: 10,
  },
});

export default SplashScreen;