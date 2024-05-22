
import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Page3 =()=> {
    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
      ];
    
      const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item.id)}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      );
    
      const handleItemPress = (id) => {
        alert(`Item with ID ${id} clicked`);
      };
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
  },
});

export default Page3;
