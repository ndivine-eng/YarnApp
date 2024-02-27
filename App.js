import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CurrencyConverter from './components/CurrencyConverter';
import { useState } from 'react';
import React from 'react';
import Currency from './screen/Currency';


export default function App() {
  return (
    <View>
      <View>
        <Currency />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}






