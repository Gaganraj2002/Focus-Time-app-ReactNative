/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView, 
  StatusBar,
  View,
  Text,
} from 'react-native';
import {colors} from './src/utils/colors';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/timer';
import { FocusHistory } from './src/features/focusHistory';
function App(): React.JSX.Element {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]); // [subject, status, key
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer 
        focusSubject={currentSubject} 
        onTimerEnd={() => {
          setHistory([...history, currentSubject]);
          setCurrentSubject(null);
        }}
        clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkblue,
  },
  text:{
    color: colors.white,
  }

});

export default App;
