
import React, {useState,useEffect} from 'react';
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
import CandidateData from '../../CandidateJson.json';
const EditIcon = require('../../assets/editicon.webp');
const DeleteIcon = require('../../assets/delete.png');
const User1 = require('../../assets/user1.png');


const handleItemPress = id => {
  alert(`Item with ID ${id} clicked`);
};
const Page2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(CandidateData);

  useEffect(() => {
    // Filter data based on the query
    if (query) {
      const filtered = CandidateData.filter(item =>
        item.first_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      // If the query is empty, show the original data
      setFilteredData(CandidateData);
    }
  }, [query]);

  const renderItem = ({item}) => (
    // const [modalVisible, setModalVisible] = useState(false);
    <View style={styles.item}>
      <View
        style={{
          // flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 70,
            backgroundColor: '#f2f0f0',
            alignSelf: 'center',
          }}></View>
        <View style={{flex: 1, justifyContent: 'flex-start', margin: 5}}>
          <Text style={styles.title1}>{item.first_name}</Text>
          <Text style={styles.title}>{item.last_name}</Text>
          <Text style={styles.title}>{item.phone_number}</Text>
          <Text style={styles.title}>{item.email}</Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity>
            <Image style={{right: 20, height: 20, width: 20}} source={EditIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={{height: 20, width: 20}} source={DeleteIcon} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.item}
            onPress={() => handleItemPress(item.first_name)}>
            {console.log("saiiiii",item)}
            <Text style={styles.title}>{item.first_name}</Text>
            <Text style={styles.title}>{item.first_name}</Text>
            <Text style={styles.title}>{item.first_name}</Text>
            <Text style={styles.title}>{item.first_name}</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={{margin: 5}}>
      <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView1}>
        <View style={styles.modalView1}>
          <Text style={styles.modalText}>
            Are you sure, You want to delete this?
          </Text>
          <Text> This action cannot be undone.</Text>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.button1, styles.buttonClose1]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
      {/* modal code here */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              height: 40,
              //   width:150,
              margin: 5,
              borderWidth: 1,
              padding: 10,
              borderColor: 'gray',
            }}
            onChangeText={text => setQuery(text)}
            value={query}
            // placeholder="Search here..."
    
            placeholder="Search Employees List"
          />
          <View style={{}}>
            <Button
              title="+"
              color="#4287f5"
              // onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View>
            <TouchableOpacity>
              <Button
                title="+"
                color="#4287f5"
                // onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Button
              title="+"
              color="#4287f5"
              // onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              title="+"
              color="#4287f5"
              // onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#b3afaf',
          margin: 5,
          marginTop: 10,
        }}></View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.candidate_id}
        renderItem={(renderItem)}
      />

      {/* <Icons name="glass" size={60} color='red'/>
        <Icon1 name="code" size={60} color='red'/> */}
    </SafeAreaView>
  );
};

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
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title1: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 14,
  },
});
export default Page2;
