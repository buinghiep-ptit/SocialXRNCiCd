/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Crashes from 'appcenter-crashes'
import {
  Button,
  SafeAreaView,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView>
      <Button title="Crash"
        onPress={() => Crashes.generateTestCrash()}/>
    </SafeAreaView>
  );
};

export default App;
