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
import Cards from '../Componets/cards/cards'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import Icons from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/Feather';

const EditIcon = require('../../assets/editicon.webp');
const DeleteIcon = require('../../assets/delete.png');
const User1 = require('../../assets/user1.png');

const ModalView = () => {
  return (
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
  );
};

const Page2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const CardsData=()=>{
    return(
        <View
        style={{
          margin: 5,
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
    )
}
  return (
    <SafeAreaView style={{margin: 10}}>
      {ModalView}
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
            placeholder="Search Employees List"
          />
          <View style={{margin: 1}}>
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
     <View style={{ flex: 1,flexDirection:'column',justifyContent:'space-between'}}>

<View style={{flex:1,flexDirection:'column',justifyContent:'space-between',alignItems:'stretch',}}>
< Cards />
< Cards />
</View>


     {/* <View
        style={{
          margin: 5,
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
      </View> */}
    
     </View>
      
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
});
export default Page2;
