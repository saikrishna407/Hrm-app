// Page4.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';
import DatePicker1 from '../Componets/DatePicker/datePicker';

const Page4 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
//   const [avatar, setAvatar] = useState(null);

//   const handleChoosePhoto = () => {
//     ImagePicker.launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else {
//         setAvatar(response.assets[0].uri);
//       }
//     });
//   };

  const handleSaveProfile = () => {
    // Add your save logic here
    alert('Profile saved');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity >
        {/* {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.avatarPlaceholder]}>
            <Text style={styles.avatarText}>Choose Photo</Text>
          </View>
        )} */}
        <View style={[styles.avatar, styles.avatarPlaceholder]}>
            <Text style={styles.avatarText}>Choose Photo</Text>
          </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />
      <DatePicker1 />
      <Button title="Save Profile" onPress={handleSaveProfile} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  avatarPlaceholder: {
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
  },
});

export default Page4;
