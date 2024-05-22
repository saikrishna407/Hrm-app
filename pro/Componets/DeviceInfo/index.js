// // DeviceInfoComponent.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

// const DeviceInfoComponent = () => {
//   const [deviceInfo, setDeviceInfo] = useState({});

//   useEffect(() => {
//     const fetchDeviceInfo = async () => {
//       const uniqueId = await DeviceInfo.getUniqueId();
//       const systemName = await DeviceInfo.getSystemName();
//       const systemVersion = await DeviceInfo.getSystemVersion();
//       const model = await DeviceInfo.getModel();
//       const brand = await DeviceInfo.getBrand();
//       const deviceId = await DeviceInfo.getDeviceId();
//       const manufacturer = await DeviceInfo.getManufacturer();
//       const readableVersion = await DeviceInfo.getReadableVersion();

//       setDeviceInfo({
//         uniqueId,
//         systemName,
//         systemVersion,
//         model,
//         brand,
//         deviceId,
//         manufacturer,
//         readableVersion,
//       });
//     };

//     fetchDeviceInfo();
//   }, []);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {Object.keys(deviceInfo).map((key) => (
//         <View key={key} style={styles.infoItem}>
//           <Text style={styles.infoKey}>{key}:</Text>
//           <Text style={styles.infoValue}>{deviceInfo[key]}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   infoItem: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   infoKey: {
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   infoValue: {
//     flex: 1,
//     flexWrap: 'wrap',
//   },
// });

// export default DeviceInfoComponent;
