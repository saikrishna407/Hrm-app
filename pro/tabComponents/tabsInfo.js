import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EmpLogin from '../main/empLogin';
import CompanyLogin from '../main/companyLogin';
import Page1 from '../Pages/page1';
import Page2 from '../Pages/page2';
import Page3 from '../Pages/page3';
import Page4 from '../Pages/page4';
import Page5 from '../Pages/page5';
const Tab = createBottomTabNavigator();
const HomeLogo = require('../../assets/hrm-logo-removebg-preview.png');
const ProfileImg=require('../../assets/profile2.png')
const HomeImg=require('../../assets/homeimg.png')
const Empimg=require('../../assets/Empimg.png')
const Leavesimg=require('../../assets/leavesimg.png')
const Attendsimg=require('../../assets/attendenceimg.png')
const Timesheetimg=require('../../assets/Timesheetimg.png')





export default class TabsInfo extends Component {
  render() {
    return (
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
       tabBarActiveTintColor: 'tomato',
      }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image source={HomeImg} style={{width: size, height: size}} />
              );
            },

            headerTitleStyle: {
              color: '#0f1012',
            },
            headerTitleAlign: 'center',

            headerLeft: () => {
              return (
                <View>
                  <Image source={HomeLogo} style={{width: 80, height: 80}} />
                </View>
              );
            },
            headerRight: () => {
              return (
                <View style={{right:10}}>
                  <Image source={ProfileImg} style={{width: 30, height: 30}} />
                </View>
              );
            },
          }}
          name="Home"
          component={Page1}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image source={Empimg} style={{width: size, height: size}} />
              );
            },

            headerTitleStyle: {
              color: '#0f1012',
            },
            headerTitleAlign: 'center',

            headerLeft: () => {
              return (
                <View>
                  <Image source={HomeLogo} style={{width: 80, height: 80}} />
                </View>
              );
            },
            headerRight: () => {
              return (
                <View>
                  <Image source={ProfileImg} style={{width: 30, height: 30}} />
                </View>
              );
            },
          }}
          name="Employee"
          component={Page2}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image source={Leavesimg} style={{width: size, height: size}} />
              );
            },

            headerTitleStyle: {
              color: '#0f1012',
            },
            headerTitleAlign: 'center',

            headerLeft: () => {
              return (
                <View>
                  <Image source={HomeLogo} style={{width: 80, height: 80}} />
                </View>
              );
            },
            headerRight: () => {
              return (
                <View>
                  <Image source={ProfileImg} style={{width: 30, height: 30}} />
                </View>
              );
            },
          }}
          name="Leaves"
          component={Page3}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image source={Attendsimg} style={{width: size, height: size}} />
              );
            },

            headerTitleStyle: {
              color: '#0f1012',
            },
            headerTitleAlign: 'center',

            headerLeft: () => {
              return (
                <View>
                  <Image source={HomeLogo} style={{width: 80, height: 80}} />
                </View>
              );
            },
            headerRight: () => {
              return (
                <View>
                  <Image source={ProfileImg} style={{width: 30, height: 30}} />
                </View>
              );
            },
          }}
          name="Attends"
          component={Page4}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image source={Timesheetimg} style={{width: size, height: size}} />
              );
            },

            headerTitleStyle: {
              color: '#0f1012',
            },
            headerTitleAlign: 'center',

            headerLeft: () => {
              return (
                <View>
                  <Image source={HomeLogo} style={{width: 80, height: 80}} />
                </View>
              );
            },
            headerRight: () => {
              return (
                <View>
                  <Image source={ProfileImg} style={{width: 30, height: 30}} />
                </View>
              );
            },
          }}
          name="TimeSheet"
          component={Page5}
        />
      </Tab.Navigator>
    );
  }
}
