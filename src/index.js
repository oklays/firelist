import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './firebase.config';
const db = firebase.database();

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  // State :
  state = {
    Todo: [],
    inputTodo: '',
  };

  // Hal yang pertama kali dijalanakan
  componentDidMount = () => {};

  handleAddButton = () => {
    // this.setState(previousState => ({
    //   Todo: [...previousState.Todo, todo],
    // }));
    let todoInput = this.state.inputTodo;
    db.ref('/Todos').push({
      todo: todoInput,
      status: false,
    });
  };

  handleRemoveButton = () => {};

  handleCompleteButton = () => {};

  // komponen untuk load Todo
  renderList = ({item, index}) => (
    <View style={styles.renderlist_container}>
      <Text
        style={{
          maxWidth: 230,
          fontSize: 14,
          color: '#000',
          textAlign: 'justify',
          textDecorationLine: item.status === true ? 'line-through' : 'none',
        }}>
        {item.todo}
      </Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.renderlist_complete}>
        <Text style={{color: '#fff', fontWeight: '700'}}>✔</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.renderlist_remove}>
        <Text style={{color: '#fff', fontWeight: '700'}}>X</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#429bb8" />
        {/* Header */}
        <View
          style={{
            backgroundColor: '#429bb8',
            paddingVertical: 7,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.main_header}>Firelist</Text>
        </View>
        {/* End Header */}

        {/* Body */}
        <ScrollView>
          <View style={{flex: 1, marginBottom: 20}}>
            {/* List Component */}
            <View style={styles.main_listcontainer}>
              <Text style={styles.main_listheader}>Todo List</Text>
              <FlatList
                data={this.state.Todo}
                renderItem={this.renderList}
                keyExtractor={(item, index) => index.toString()}
              />
              <View style={styles.main_inputcontainer}>
                <TextInput
                  onChangeText={text => this.setState({inputTodo: text})}
                  multiline={true}
                  style={{width: '80%', maxWidth: 250}}
                />
                <TouchableOpacity
                  onPress={() => this.handleAddButton()}
                  style={styles.main_buttonkirim}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>Tambah</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* End List Component */}
          </View>
          {/* End Body */}
        </ScrollView>
        {/* Note */}
        <View style={{paddingHorizontal: 20, paddingVertical: 5}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Arial',
              textAlign: 'center',
              color: '#A9A9A9',
            }}>
            Credit By Okky{'\n'}V 1.0.0
          </Text>
        </View>
        {/* End Note */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_header: {
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'left',
    color: '#fff',
  },
  main_listcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 7,
    overflow: 'hidden',
  },
  main_listheader: {
    fontSize: 23,
    fontFamily: 'Arial',
    textAlign: 'center',
    color: '#000',
    fontWeight: '700',
    backgroundColor: '#d3d3d3',
    paddingVertical: 5,
    borderBottomColor: '#fff',
    borderBottomWidth: 1.5,
  },
  main_inputcontainer: {
    borderColor: '#d3d3d3',
    borderWidth: 10,
    flexDirection: 'row',
  },
  main_buttonkirim: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'lightblue',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  renderlist_container: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  renderlist_complete: {
    position: 'absolute',
    right: 45,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 7,
  },
  renderlist_remove: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
});
