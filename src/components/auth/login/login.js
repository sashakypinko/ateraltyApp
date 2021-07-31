import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-native'
import {selectUser} from '../../../store/selectors';
import {loginUser} from "../../../store/actions/user";
// import {GoogleSignin, statusCodes} from 'react-native-google-signin';

const ErrorMessage = () => {

    return (
        <Text style={styles.error}>Invalid email or password</Text>
    );
};

const ValidateMessage = ({message}) => {
    return (
        <Text style={styles.error}>{message}</Text>
    );
};

const LoginForm = () => {
    const dispatch = useDispatch();
    const {user_id, token, loading, error} = useSelector(selectUser);

    const initForm = {
        email: '',
        password: ''
    };

    const initValidateMessages = {
        email: '',
        password: ''
    }

    const [form, setForm] = useState(initForm);
    const [securePassword, changeSecurePassword] = useState(true);
    const [validateMessages, setValidateMessages] = useState(initValidateMessages);

    const validate = ({email, password}) => {
        const getMessage = (field) => `${field} is required`;

        setValidateMessages({
            email: email.length ? '' : getMessage('Email'),
            password: password.length ? '' : getMessage('Password')
        });

        return email.length && password.length;
    };

    const handleEmailChange = (e) => {
        setForm({
            ...form,
            email: e.nativeEvent.text
        });
    };

    const handlePasswordChange = (e) => {
        setForm({
            ...form,
            password: e.nativeEvent.text
        });
    };

    const handleShowPassword = () => {
        changeSecurePassword(!securePassword);
    };

    const handleLogin = async () => {
        if (validate(form)) {
            dispatch(loginUser(form));
        }
    };

    if (user_id) {
        return <Redirect to="/"/>;
    }

    const handleLoginWithGoogle = () => {
        // signIn();
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/logo-full.png')}/>
            {
                error ? <ErrorMessage/> : false
            }
            {
                validateMessages.email ? <ValidateMessage message={validateMessages.email}/> : false
            }
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={form.email}
                onChange={handleEmailChange}/>
            {
                validateMessages.password ? <ValidateMessage message={validateMessages.password}/> : false
            }
            <TextInput
                placeholder="Password"
                right={<TextInput.Icon name="eye" onPress={handleShowPassword}/>}
                style={styles.input}
                value={form.password}
                onChange={handlePasswordChange}
                secureTextEntry={securePassword}/>
            <View style={styles.buttonGroup}>
                <Button style={styles.loginButton}
                        mode="contained"
                        uppercase={false}
                        loading={loading}
                        onPress={handleLogin}>
                    Log In
                </Button>
                <Button style={styles.loginGoogleButton}
                        mode="contained"
                        icon="google"
                        uppercase={false}
                        onPress={handleLoginWithGoogle}>
                    Login With Google
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25
    },
    input: {
        margin: 10,
        height: 40,
        width: '70%'
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    loginButton: {
        fontSize: 5,
        margin: 5,
        backgroundColor: '#20b6fd'
    },
    loginGoogleButton: {
        fontSize: 5,
        margin: 5,
        backgroundColor: '#1f1f1f'
    },
    error: {
        color: '#ff4444',
        marginTop: 10
    }
});

export default LoginForm;