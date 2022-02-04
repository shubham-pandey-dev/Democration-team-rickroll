/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import MlkitOcr from 'react-native-mlkit-ocr';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {!!result?.length && (
        <ScrollView
          contentContainerStyle={{
            alignItems: 'stretch',
            padding: 20,
            height: Dimensions.get('window').height,
          }}
          showsVerticalScrollIndicator
          style={styles.scroll}>
          {result?.map(block => {
            return block.lines.map(line => {
              return (
                <View key={line.text}>
                  <Text style={{fontSize: 20}}>{line.text}</Text>
                </View>
              );
            });
          })}
        </ScrollView>
      )}

      <Button
        onPress={() => {
          setLoading(true);
          launchGallery(setResult, setLoading);
        }}
        title="Open Gallery"
      />
      <Button
        onPress={() => {
          setLoading(true);
          openCamera(setResult, setLoading);
        }}
        title="Open Camera"
      />
    </SafeAreaView>
  );
};

const launchGallery = (setResult, setLoading) => {
  launchImageLibrary(
    {
      mediaType: 'photo',
    },
    async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Done!!', response);
        console.log(response?.assets[0]?.uri);
        setResult(await MlkitOcr.detectFromUri(response?.assets[0]?.uri));
        setLoading(false);
      }
    },
  );
};

const openCamera = (setResult, setLoading) => {
  launchCamera(
    {
      mediaType: 'photo',
    },
    async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Done!!', response);
        console.log(response?.assets[0]?.uri);
        setResult(await MlkitOcr.detectFromUri(response?.assets[0]?.uri));
        setLoading(false);
      }
    },
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 2,
  },
});

export default App;
