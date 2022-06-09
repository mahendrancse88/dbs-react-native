import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PostsComponent = ({ posts, index }) => {
    return (
        <View style={styles.movieCard} key={'con2'+posts.random} >
            <View  key={'con'+posts.random} style={{alignItems: "left", justifyContent: "left",  maxHeight: 250,width:'100%' }} >
                <View   key={'con1'+posts.random} style={{ padding: 10 }} >
                
            {posts.title && <Text  key={'Title'-index} style={styles.title} >{posts.title}</Text>  }
                {posts.body && <Text  key={'body'+posts.random} style={{ fontSize: 16}} >{posts.body}</Text> }
            {posts.random &&  <Text key={'randm'+posts.random}  style={{ fontSize: 12,  borderBottomWidth: 0.5, borderBottomColor: "grey" }} ><b>{posts.random}</b></Text>  }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    movieCard: {
        alignItems: "left",
        backgroundColor: "white",
        borderRadius: 6,
       
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#505050",
        fontFamily: 'menlo',
    }
});

export default PostsComponent;