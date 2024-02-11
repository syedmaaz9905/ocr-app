import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';

const MainScreen = ({ navigation }) => {
  const fadeInFromTopAnimation = useRef(new Animated.Value(0)).current;

  // Animated values for each logo
  const fadeInFromLeft = useRef(new Animated.Value(0)).current;
  const fadeInFromBottom = useRef(new Animated.Value(0)).current;
  const fadeInFromRight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInFromTopAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeInFromTopAnimation]);

  // Logo ANimation configuration
  const animateLogo = (animatedValue, fromValue, toValue, duration) => {
    return Animated.timing(animatedValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    });
  };

  // Logo useEffect to trigger animations
  useEffect(() => {
    Animated.parallel([
      animateLogo(fadeInFromLeft, -100, 0, 1000),  // Pan in from left
      animateLogo(fadeInFromBottom, 100, 0, 1000), // Pan in from bottom
      animateLogo(fadeInFromRight, 100, 0, 1000),  // Pan in from right
    ]).start();
  }, [fadeInFromLeft, fadeInFromBottom, fadeInFromRight]);

  return (
    <View style={styles.container}>

      {/* Animated Image at top center */}
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeInFromTopAnimation, transform: [{
              translateY: fadeInFromTopAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0], // Adjust the initial translateY value as needed
              })
            }]
          },
        ]}
      >
        <Image
          source={require('./../../assets/images/dastaan-mainscreen.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Dotted box with white content */}
      <View style={styles.dottedBox}>
        <View style={styles.innerBox}>

          {/* First row */}
          <View style={styles.imageRow}>
            {/* First Image */}
            <View style={styles.imageColumn}>
              <Image
                source={require('./../../assets/images/frame-camera.png')}
                style={styles.innerImageFirstRow}
                resizeMode="contain"
              />
              <Text
                onPress={() => navigation.navigate('ImagePreview')}
                style={styles.imageText}
              >
                Capture
              </Text>
            </View>

            {/* Second Image */}
            <View style={styles.imageColumn}>
              <Image
                source={require('./../../assets/images/frame-gallery.png')}
                style={styles.innerImageFirstRow}
                resizeMode="contain"
              />
              <Text
                onPress={() => navigation.navigate('ImagePreview')}
                style={styles.imageText}
              >
                Gallery
              </Text>
            </View>
          </View>

          {/* Second row */}
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Inter', fontWeight: '400', color: '#000000' }}>Dont have an image? Try these.</Text>
          </View>

          {/* Third row */}
          <View style={styles.imageRow}>
            <Image
              source={require('./../../assets/images/suggestion-first.png')}
              style={styles.innerImageThirdRow}
              resizeMode="contain"
            />

            <Image
              source={require('./../../assets/images/suggestion-second.png')}
              style={styles.innerImageThirdRow}
              resizeMode="contain"
            />
          </View>

          {/* Fourth row */}
          <View style={styles.imageRow}>
            {/* First Logo */}
            <Animated.Image
              source={require('./../../assets/images/NEDUET-logo.png')}
              style={[
                styles.innerImageFourthRow,
                {
                  opacity: fadeInFromLeft, transform: [{
                    translateX: fadeInFromLeft.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    })
                  }]
                },
              ]}
              resizeMode="contain"
            />

            {/* Second Logo */}
            <Animated.Image
              source={require('./../../assets/images/NCL-logo.png')}
              style={[
                styles.innerImageFourthRow,
                {
                  opacity: fadeInFromBottom, transform: [{
                    translateY: fadeInFromBottom.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    })
                  }]
                },
              ]}
              resizeMode="contain"
            />

            {/* Third Logo */}
            <Animated.Image
              source={require('./../../assets/images/ATUP-logo.png')}
              style={[
                styles.innerImageFourthRow,
                {
                  opacity: fadeInFromRight, transform: [{
                    translateX: fadeInFromRight.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    })
                  }]
                },
              ]}
              resizeMode="contain"
            />

          </View>

        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF9FF',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dottedBox: {
    flex: 3,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderRadius: 16,
    borderColor: '#FFFFFF',
    backgroundColor: '#DEF9FF',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F0FCFF',
    width: '95%',
    height: '97%',
    borderRadius: 16,
    padding: 15,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  imageColumn: {
    alignItems: 'center',
  },
  innerImageFirstRow: {
    width: 120,
    height: 100,
    margin: 10,
  },
  imageText: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#000000',
  },
  innerImageThirdRow: {
    width: 140,
    height: 200,
    marginHorizontal: 10,
  },
  innerImageFourthRow: {
    width: 75,
    height: 75,
    marginHorizontal: 10,
  }
});

export default MainScreen