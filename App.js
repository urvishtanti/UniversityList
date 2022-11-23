import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import ListOfUniversityScreen from './module/screen/ListOfUniversityScreen';
import {store} from './module/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.flex}>
        <ListOfUniversityScreen />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
