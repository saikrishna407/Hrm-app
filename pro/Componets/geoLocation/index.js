// DeviceInfoComponent.js
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Geolocation from '@react-native-community/geolocation';

const Page5 = () => {
  const [deviceInfo, setDeviceInfo] = useState({});
  const [currentLocation, setCUrrentLocation] = useState(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const uniqueId = await DeviceInfo.getUniqueId();
      const systemName = await DeviceInfo.getSystemName();
      const systemVersion = await DeviceInfo.getSystemVersion();
      const model = await DeviceInfo.getModel();
      const brand = await DeviceInfo.getBrand();
      const deviceId = await DeviceInfo.getDeviceId();
      const manufacturer = await DeviceInfo.getManufacturer();
      const readableVersion = await DeviceInfo.getReadableVersion();

      setDeviceInfo({
        uniqueId,
        systemName,
        systemVersion,
        model,
        brand,
        deviceId,
        manufacturer,
        readableVersion,
      });
    };

    fetchDeviceInfo();
  }, []);
  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message:
            'Cool Photo App needs access to your Location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCUrrentLocation({latitude, longitude});
        console.log(latitude, longitude);
      },
      error => alert('Error', error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  const openMaps = () => {
    const {latitude, longitude} = currentLocation;
    if ((latitude, longitude)) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);
    } else {
      alert('location is not found');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{backgroundColor: 'white', padding: 10,margin:10}}>
        {Object.keys(deviceInfo).map(key => (
          <View key={key} style={styles.infoItem}>
            <Text style={styles.infoKey}>{key}:</Text>
            <Text style={styles.infoValue}>{deviceInfo[key]}</Text>
          </View>
        ))}
      </View>
      <View style={{backgroundColor: 'white', padding: 10,margin:10}}>
        <Text>Geo coords</Text>
        <View>
          <Text>
            Lattitude:{currentLocation?currentLocation.latitude:"Loding ......"}
          </Text>
          <Text>
            Longitude:{currentLocation?currentLocation.longitude:"Loding ......"}
          </Text>
        </View>
        {currentLocation?(
          <>
          <TouchableOpacity onPress={openMaps} style={{backgroundColor:'red',height:10,width:50}}>
          <View>
            <Text>
              Open Maps
            </Text>
          </View>
          </TouchableOpacity>
          </>
        ):(
          <>
          <TouchableOpacity onPress={Permission} style={{backgroundColor:'red',height:50,width:"50%"}}> 
          <View>
            <Text>
              Get Location
            </Text>
          </View>
          </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'gray',
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoKey: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoValue: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default Page5;
