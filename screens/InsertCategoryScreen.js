import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { Component } from 'react';
import Card from '../components/ui/Card';


export default class InsertCategoryScreen extends Component {

  state = {
    categoryId: '',
    name: ""
  }
  inputChangedHandler = (name, value) => { 
      this.setState({ ...this.state, [name]: value});
  };
  saveCategoryHandler = () => { 
    Alert.alert('Info','' + JSON.stringify(this.state),[{text: 'OK'}]);
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
            <Text>Category ID</Text>
            <TextInput
              style={styles.input}
              value={this.state.categoryId} onChangeText={this.inputChangedHandler.bind(this,"categoryId")}>
            </TextInput>
            <Text>Name</Text>
            <TextInput
              style={styles.input}
              value={this.state.name} onChangeText={this.inputChangedHandler.bind(this,"name")}>
            </TextInput>
            <Button
              title="Save" onPress={this.saveCategoryHandler}
              style={styles.button}>
            </Button>
        </Card>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  // card: {
  //   shadowColor: 'black',
  //   shadowOpacity: 0.26,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 8,
  //   elevation: 5,
  //   borderRadius: 10,
  //   backgroundColor: "while",
  //   padding: 15,
  // },

});