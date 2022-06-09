import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchBar = ({ query, fetchData, setQuery }) => {
    return (
        <View style={styles.parent}>

            <TextInput style={styles.search} placeholder="Search..." onChangeText={(q) => { setQuery(q) }} value={query} />
            <TouchableOpacity activeOpacity={0.7} style={styles.iconTouch} onPress={fetchData} >
               Re-render
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    parent: {
        flexDirection: "row",
        flex: 1
    },
    search: {
        flex: 1,
        paddingHorizontal: 15,
        borderColor: "black",
        backgroundColor: '#E8E8E8',
        margin: 10,
        padding:8
    },
    iconTouch: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 20,
        backgroundColor: '#E8E8E8',
        paddingLeft:10,
        paddingRight:10
    }
});

export default SearchBar;