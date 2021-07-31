import React from 'react';
import {useSelector} from "react-redux";
import {selectUser} from "../../store/selectors";
import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from "../loader";
import CallKeep from "../call-keep";
import NumberDetection from "../number-detection";

const Instruction = () => {
    const {user, loading} = useSelector(selectUser);

    return (
        loading ?
            <Loader/>
            :
            <View style={styles.container}>
                <Icon
                    style={styles.checkIcon}
                    color={'#7fff21'}
                    name={'check'}
                    size={80}
                />
                <Text style={styles.title}>Congratulations {user.first_name} {user.last_name}!</Text>
                <Text style={styles.content}>
                    You have successfully connected your phone to your CRM.
                    Now when a contact calls you their name will display under their phone number
                </Text>
                <NumberDetection />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1ffcb',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        padding: 20,
        maxHeight: 500,
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    content: {
        fontSize: 17
    },
    checkIcon: {
        paddingBottom: 20
    }
});

export default Instruction;