import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExtractedText = () => {
  return (
    <View style={styles.container}>
      {/* Dotted box with white content */}
      <View style={styles.dottedBox}>
        <View style={styles.innerBox}>

          <View style={{ alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: '400', color: '#000000' }}>Image Preview</Text>
          </View>

          <View style={styles.innerInnerBox}>

            <View style={{ alignItems: 'center', }}>
              <Image
                source={require('./../../assets/images/inner-extractedtextscreen.png')}
                style={styles.previewImage}
                resizeMode="contain"
              />
            </View>


            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Copy Text</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
            </View>


            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonTextAudio}>
                <Text style={styles.buttonText}>Text Audio</Text>
                <View style={styles.playPauseContainer}>
                  <TouchableOpacity style={styles.playPauseButton}>
                    {/* Your Play Icon */}
                    <Icon name="play-circle" size={20} color="#FFFFFF" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.playPauseButton}>
                    {/* Your Pause Icon */}
                    <Icon name="pause-circle" size={20} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>


            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.buttonFirst}>
                <Image
                  source={require('./../../assets/images/button-home.png')}
                  style={styles.buttonImageFirst}
                  resizeMode="contain"
                />
                <Text style={styles.buttonTextFirst}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecond}>
                <Image
                  source={require('./../../assets/images/button-exit.png')}
                  style={styles.buttonImageSecond}
                  resizeMode="contain"
                />
                <Text style={styles.buttonTextSecond}>Exit</Text>
              </TouchableOpacity>
            </View>


          </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF9FF',
  },
  dottedBox: {
    flex: 2,
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
    backgroundColor: '#F0FCFF',
    width: '95%',
    height: '97%',
    borderRadius: 16,
    padding: 15,
  },
  innerInnerBox: {
    backgroundColor: '#DEF9FF',
    height: 100,
    borderRadius: 16,
    padding: 15,
  },
  previewImage: {
    width: 420,
    height: 420,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7B7B7B',
    borderRadius: 10,
    padding: 10,
    width: '47%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  buttonTextAudio: {
    backgroundColor: '#C1C1C1',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  playPauseContainer: {
    flexDirection: 'row',
  },
  playPauseButton: {
    marginLeft: 5,
  },
  buttonFirst: {
    backgroundColor: '#7B7B7B',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '47%',
    // marginTop: 10,
  },
  buttonImageFirst: {
    marginRight: 10,
  },
  buttonTextFirst: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonSecond: {
    backgroundColor: '#EF3B3B',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '47%',
    // marginTop: 10,
  },
  buttonImageSecond: {
    marginRight: 10,
  },
  buttonTextSecond: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
    marginRight: 10,
  }
});

export default ExtractedText