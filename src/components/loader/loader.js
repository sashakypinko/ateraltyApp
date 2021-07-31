import React from 'react';
import {ActivityIndicator, Colors} from "react-native-paper";
import {StyleSheet} from "react-native";

const Loader = () => {
    return (
        <ActivityIndicator
            style={styles.loader}
            animating={true}
            color={Colors.blue400}
            size={90}/>
    );
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        alignItems: 'center'
    }
});

export default Loader;