import {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
  // StyleSheet,
} from 'react-native';
import Temp from '../../temp';
const logo = require('../../assets/download.png');
export default function MainPage() {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <View style={{alignItems: 'center'}}>
        <View style={{}}>
          <Image source={logo} style={{height: 80, width: 80}} />
        </View>
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            Company Login
          </Text>
        </View>
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
          <Text style={{fontSize: 14}}>Are you an employee?</Text>
          <TouchableOpacity>
            <Text style={{color: 'rgb(147 51 234 )'}}>Here</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TextInput
            style={{
              height: 40,
              margin: 5,
              borderWidth: 1,
              padding: 10,
              borderColor: 'gray',
            }}
            placeholder="Employer Email Address"
          />
          <TextInput
            style={{
              height: 40,
              margin: 5,
              borderWidth: 1,
              padding: 10,
              borderColor: 'gray',
            }}
            placeholder="Password"
          />
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(147 51 234 )',
              borderColor: 'rgb(147 51 234 )',
              borderWidth: 1,
              width: 175,
              height: 40,
              borderRadius: 10,
              margin: 10,
              padding: 5,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                alignItems: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
