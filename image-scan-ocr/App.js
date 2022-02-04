// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

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
  // let imagePicker;

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
      // if (!response.uri) {
      //   throw new Error('oh!');
      // }
      // try {
      //   // console.log('Done!!');
      //   setResult(await MlkitOcr.detectFromUri(response.uri));
      // } catch (e) {
      //   console.error(e);
      // } finally {
      //   setLoading(false);
      // }
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

      // if (!response.uri) {
      //   throw new Error('oh!');
      // }
      // try {
      //   // console.log('Done!!');
      //   setResult(await MlkitOcr.detectFromUri(response.uri));
      // } catch (e) {
      //   console.error(e);
      // } finally {
      //   setLoading(false);
      // }
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
