import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStoreHook } from 'react-redux';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import BlogNavigation from './navigations/BlogNavigation';
import categoryReducers from "./stores/reducers/categoryReducers";


const rootReducer = combineReducers({
  categories: categoryReducers 
    
});

const store = createStore(rootReducer);
export default function App() { 
  return (
    <Provider store={store}>
        <BlogNavigation ></BlogNavigation>
    </Provider>
      
  );
}

