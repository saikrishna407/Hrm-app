import {
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  Modal,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const EditIcon = require('../../../assets/editicon.webp');
const DeleteIcon = require('../../../assets/delete.png');
const User1 = require('../../../assets/user1.png');

const Cards = () => {
  return (
    <View
      style={{
          
          margin:10,
        // marginTop:120
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={User1}
              style={{
                top: 5,
                height: 70,
                width: 70,
                borderRadius: 35,
                borderColor: 'gray',
                backgroundColor: 'gray',
                borderWidth: 1,
              }}
            />

            <View style={{flex: 1, marginLeft: 20}}>
              <Text style={{fontSize: 18}}>Saikrishna</Text>
              <Text style={{fontSize: 14}}>User one</Text>
              <Text style={{fontSize: 14}}>Normal</Text>
              <Text style={{fontSize: 14}}>Sai.krishna0045@gmail.com</Text>
            </View>
            <View style={{flexDirection: 'row', margin: 10}}>
              <TouchableOpacity>
                <Image
                  style={{right: 20, height: 20, width: 20}}
                  source={EditIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image style={{height: 20, width: 20}} source={DeleteIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Cards;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 5,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 110,
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  modalView1: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    //   borderRadius: 20,
    padding: 10,
    elevation: 2,
    right: 10,
  },
  button1: {
    //   borderRadius: 20,
    padding: 10,
    elevation: 2,
    left: 10,
  },
  buttonOpen: {
    backgroundColor: '#4287f5',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonClose1: {
    backgroundColor: 'gray',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
});
