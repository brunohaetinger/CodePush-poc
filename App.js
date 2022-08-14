import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import codePush from "react-native-code-push";


const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'gray'}}>
          <Text>
          "Step One V2 HERE!, using CodePush"
          </Text>
    </SafeAreaView>
  );
};

export default codePush(App);
