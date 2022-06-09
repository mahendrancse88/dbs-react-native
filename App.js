import React, { useEffect, useReducer } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import SearchComponent from './components/SearchComponent';
import PostsComponent from './components/PostsComponent';
import { SearchReducer, initialState, ACTIONS} from './reducers/SearchReducer'
import { fetchData,fetchDataAll } from './API/SearchApi'
import DisplayMessage from './components/DisplayMessage';
const App = () => {


  const [state, dispatch] = useReducer(SearchReducer, initialState)

  const { query, page, error, loading, loadingMore, DATA } = state

  useEffect(() => {
   
    if (query.length > 2) {
        
        fetchData(query, dispatch, DATA)
    } else {
        fetchDataAll(dispatch)
    }


  })
  return (
    <View key={'Full-Containor'} style={{ flex: 1, paddingTop: 0, backgroundColor: 'white'  }}>
        <View key={'Full-Containor-gif'} style={styles.header} > 
            <Image source={require('./assets/doggo_walk.gif')} alt="loading..." /> 
        </View>
        <View style={styles.header} key={'Full-Containor-header'} >
            <SearchComponent query={query} fetchData={() => { fetchData(query, dispatch,DATA) }} setQuery={q => { dispatch({ type: ACTIONS.SET_QUERY, payload: q }) }} />
        </View>

      {
        loading
          ?
          <View style={styles.messageLayout} key={'Full-Containor-load'}  >
            <ActivityIndicator key={'Full-Containor-load-component'}  size='large' color='grey' />
          </View>
          :
            error !== null ?
              <DisplayMessage message={JSON.stringify(error.message)} />
              :
              <FlatList

                data={DATA}

                keyExtractor={(item, index) => index.toString()}

                removeClippedSubviews={false}


                showsVerticalScrollIndicator={false}

                renderItem={({ item, index }) => {

                  return (
                    <PostsComponent posts={item}  />
                  )
                }}

              />

      }



    </View>
  );
};

const styles = StyleSheet.create({

  messageLayout: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },

  header: {
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row"
  },
});

export default App;
