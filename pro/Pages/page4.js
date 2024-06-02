import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
import CandidateData from '../../CandidateJson.json';

const EditIcon = require('../../assets/editicon.webp');
const DeleteIcon = require('../../assets/delete.png');
const User1 = require('../../assets/user1.png');
const Page4 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View
        style={{
          // flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{justifyContent: 'flex-start', margin: 20, marginTop: 5}}>
          <Text style={styles.title1}>Employee: Sai krishna</Text>
          <Text style={styles.title}>Date: 26 Sunday 2024</Text>
          <View style={{top: 20, flexDirection: 'row'}}>
            <Text style={styles.title}> Check in : 06:50 AM | </Text>
            <Text style={styles.title}> Check Out: 04:00 PM</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={styles.title2}>8 hr</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const handleItemPress = id => {
    alert(`Item with ID ${id} clicked`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.modalText}>Apply Leave</Text>
              </View>
              <View
                style={{
                  width: 350,
                  borderWidth: 1,
                  borderColor: '#b3afaf',
                  margin: 5,
                  marginTop: 10,
                }}></View>
              <View style={styles.modelTextView1}>
                <View style={styles.modelTextView}>
                  <Text style={styles.modelText}>Leave Type :</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="----select----"
                    // value={name}
                    // onChangeText={setName}
                  />
                </View>
                <View style={styles.modelTextView}>
                  <Text style={styles.modelText}>Leave Balance :</Text>
                  <Text style={{right: 0}}>8 Days</Text>
                </View>
                <View style={styles.modelTextView}>
                  <Text style={styles.modelText}>From Date :</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="----select----"
                    // value={name}
                    // onChangeText={setName}
                  />
                </View>
                <View style={styles.modelTextView}>
                  <Text style={styles.modelText}>To Date:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="----select----"
                    // value={name}
                    // onChangeText={setName}
                  />
                </View>
                <View style={styles.modelTextView}>
                  <Text style={styles.modelText}>Leaves Applying:</Text>
                  <Text style={{right: 110}}>8 Days</Text>
                </View>
                <View style={styles.modelTextView}>
                  <Text style={styles.modelText}>Comments :</Text>
                  <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={100}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={styles.inputArea}
                    // placeholder="Please enter the Reason"
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  alignContent: 'space-between',
                }}>
                <Pressable
                  style={[styles.button1, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle1}>Save</Text>
                </Pressable>
                <Pressable
                  style={[styles.button1, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle1}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignSelf: 'center',
          }}>
          <View
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Start Date</Text>
          </View>
          <View
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible1(true)}>
            <Text style={styles.textStyle}>End Date</Text>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible1(true)}>
            <Text style={styles.textStyle}>Show</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // margin: 10,
            alignSelf: 'center',
          }}></View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#b3afaf',
          margin: 5,
          marginTop: 10,
        }}></View>
      <FlatList
        data={CandidateData}
        renderItem={renderItem}
        style={{margin: 5}}
        keyExtractor={item => item.candidate_id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title2: {
    fontSize: 16,
    // fontWeight: '600',
    color: '#4287f5',
    left: -10,
  },
  title1: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 14,
  },
  button: {
    //   borderRadius: 20,
    padding: 10,
    elevation: 2,
    // marginRight: 10,
  },
  button1: {
    //   borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginRight: 10,
  },
  buttonOpen: {
    backgroundColor: 'white',
    marginLeft: 15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#4287f5',
    // fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  textStyle1: {
    color: 'white',
    // fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 100,
  },
  modalView: {
    // flex:1,
    // height:100,
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
  input: {
    width: '55%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  inputArea: {
    width: '55%',
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    // marginBottom: 12,
    // paddingHorizontal: 10,
    padding: 10,
  },
  modelText: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginRight: 10,
  },
  modelTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  modelTextView1: {
    justifyContent: 'space-between',
    margin: 5,
    alignSelf: 'stretch',
  },
});

export default Page4;
