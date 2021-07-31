import React, {useEffect, useState} from 'react';
import CallDetectorManager from 'react-native-call-detection';
import {AppRegistry, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';

let callDetector = undefined;

async function requestPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
            {
                title: 'Need App Permission',
                message: 'App needs access to your phone state',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        const logGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
            {
                title: 'Need App Permission',
                message: 'App needs access to your call log',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        console.log(logGranted);

        if (granted === PermissionsAndroid.RESULTS.GRANTED && logGranted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permissions granted');
            return true;
        } else {
            console.log('Permissions denied');
            return false;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }
}

const NumberDetection = () => {
    const [callStates, setCallStates] = useState([]);

    const init = () => {
        callDetector = new CallDetectorManager((event, number) => {
                setCallStates([...callStates, `${event} - ${number}`]);
            },
            true,
            () => {
                console.log('Permissions denied');

            },
            {
                title: 'Phone State Permission',
                message: 'NativeLogger needs access to your phone state in order to react and/or to adapt to incoming calls.'
            }
        );
    };

    useEffect(() => {
        const result = requestPermission();
        console.log(result);

        AppRegistry.registerHeadlessTask('NumberDetectionTask', () => {

            init();

            return async () => {
            };
        });
    }, []);

    return (
        <View style={styles.container}>
            {
                callStates.map((rowData, number) =>
                    <Text key={number}>{rowData}</Text>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default NumberDetection;