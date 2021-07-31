import {AsyncStorage} from "react-native";

export const storeUser = async (user) => {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async () => {
    try {
        return await AsyncStorage.getItem('user');
    } catch (error) {
        console.log(error)
    }
}

export const storeNumber = async (number) => {
    try {
        await AsyncStorage.setItem('number', number);
    } catch (error) {
        console.log(error);
    }
};

export const getNumber = async () => {
    try {
        return await AsyncStorage.getItem('number');
    } catch (error) {
        console.log(error)
    }
}
