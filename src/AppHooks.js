import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, StatusBar} from 'react-native';

export default () => {
  // State : 
  

  const renderList = ({item, index}) => <View></View>;

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor='#429bb8' />
      {/* Header */}
      <View style={{backgroundColor: '#429bb8', paddingVertical: 5}}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: 'Arial',
            textAlign: 'center',
            color: '#fff',
          }}>
          Firelist App
        </Text>
      </View>
      {/* End Header */}

      {/* Body */}
      <View style={{flex: 1}}>
        {/* List Component */}
        {/* <FlatList data renderItem={renderList} /> */}
        {/* End List Component */}
      </View>
      {/* End Body */}
    </View>
  );
};
