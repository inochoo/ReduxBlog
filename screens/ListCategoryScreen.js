import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,FlatList } from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { FlatList } from 'react-native-gesture-handler';


class ListCategoryScreen extends Component {
    goInsertCategoryHandler = () => {
        const {navigation} = this.props;

        navigation.navigate("InsertCategoryScreen");
    };
  render(){
    const { categories } = this.props;

    return(
        <View style={styles.container}>
            <FlatList data={categories} keyExtractor={(item, index)=>item.categoryId }
              renderItem={(itemData) => <Text>{itemData.item.name}</Text>}
            ></FlatList>
            <Text></Text>
            <View style={styles.button}>
                <Button title="Insert Category" onPress={this.goInsertCategoryHandler}>
                    
                </Button>
            </View>
            
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ListCategoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',   
  },
  button:{
    margin: 5
  },
});