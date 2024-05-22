/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
   // StyleSheet,
 } from 'react-native';
 
 export default function Temp() {
   const [enterText,setEnterText]=useState('');
   function onChangeTextData(enterTextData){
     setEnterText(enterTextData);
   }
   function onChangeGoalData(){
     console.log(enterText)
   }
   return (
     <View style={styles.appContainer}>
       <View style={styles.inputContainer}>
         <TextInput
           style={styles.textInputContainer}
           onChangeText={onChangeTextData}
           placeholder="Enter The Name"
         />
         <Button title="submit" onPress={onChangeGoalData}/>
       </View>
       <View style={styles.goalContainer}>
         <Text>Goals List .........</Text>
       </View>
     </View>
   );
 }
 const styles = StyleSheet.create({
   appContainer: {
     flex: 1,
     padding: 50,
     paddingHorizontal: 16,
   },
   inputContainer: {
     flex:1,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marignBottom:24,
     borderBottomWidth:1,
     borderBottomColor:'#cccccc'
   },
   textInputContainer: {
     borderWidth: 1,
     borderColor: '#cccccc',
     width: '70%',
     marginRight: 10,
     padding: 10,
     // alignItems:'center'
   },
   goalContainer: {
     flex: 4,
     top:30
   },
 });
 