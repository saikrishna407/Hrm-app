
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
const DetailPage=({navigation})=>{
  // const [modalVisible1, setModalVisible1] = useState(false);
  return (
    <View>
      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={{margin: 50, marginBottom: 100}}>
            <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
              Bandaru Saikrishna
            </Text>
            <Text style={{fontSize: 14, color: 'white'}}>MPIPL/1184</Text>
            <View style={{marginTop: 50, flexDirection: 'row'}}>
              <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
                04
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontWeight: 'bold',
                  margin: 25,
                  marginLeft: 5,
                }}>
                days
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{margin: 30}}>
            <View style={{marginTop: 1}}>
              <View>
                <Text
                  style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                  Leave Status
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <View
                  style={{
                    height: 60,
                    width: 100,
                    backgroundColor: '#defaee',
                    left: -10,
                    shadowOpacity: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{textAlign: 'center', top: 20}}> Approved</Text>
                </View>
                <View
                  style={{
                    height: 60,
                    width: 100,
                    backgroundColor: '#de1709',
                    shadowOpacity: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{textAlign: 'center', top: 20}}> Rejected</Text>
                </View>
                <View
                  style={{
                    height: 60,
                    width: 100,
                    backgroundColor: '#ffffd1',
                    right: -10,
                    shadowOpacity: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{textAlign: 'center', top: 20}}> Pending</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                Leave Details
              </Text>
            </View>
            <View style={{marginTop: 10, justifyContent: 'space-between'}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14, color: 'black'}}>Start Dated</Text>
                <Text style={{fontSize: 14, color: 'black', textAlign: 'auto'}}>
                  {' '}
                  : 06 Friday 2024
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14, color: 'black'}}>End Date</Text>
                <Text style={{fontSize: 14, color: 'black', textAlign: 'auto'}}>
                  {' '}
                  : 06 Tursday 2024
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14, color: 'black'}}>Apply Date</Text>
                <Text style={{fontSize: 14, color: 'black', textAlign: 'auto'}}>
                  {' '}
                  : 06 Friday 2024
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                Leave Type
              </Text>
              <View style={{marginTop: 10, justifyContent: 'space-between'}}>
                <Text>Sick Leave</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                Comment
              </Text>
              <View style={{marginTop: 10, justifyContent: 'space-between'}}>
                <Text>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </Text>
              </View>
            </View>

            <View style={{marginTop: 20, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: '20%',
                  backgroundColor: 'white',
                  left: -10,
                  shadowOpacity: 5,
                  borderRadius: 10,
                  borderColor: '#4287f5',
                  borderWidth: 1,
                }} 
               onPress= {() => navigation.navigate('Pages3')}>
                <Text
                  style={{
                    textAlign: 'center',
                    top: 10,
                    fontSize: 24,
                    left: -2,
                    color: '#4287f5',
                  }}>
                  {' '}
                  x
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Pages3')}
                style={{
                  height: 60,
                  width: '80%',
                  backgroundColor: '#4287f5',
                  left: 0,
                  shadowOpacity: 5,
                  borderRadius: 10,
                }} >
                <Text
                  style={{
                    textAlign: 'center',
                    top: 15,
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {' '}
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default DetailPage;
const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#4287f5',
    height: '35%',
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    width: '100%',
    height: '80%',
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: -50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
