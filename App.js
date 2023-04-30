import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './src/components/Login';
import Register from './src/components/Register';


const App = () => {
  return (
    <View>
      <Login/>
      {/* <Register/> */}
    </View>
  );
};

export default App

const styles = StyleSheet.create({
  
});