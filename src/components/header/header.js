import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Menu} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-native";
import {selectUser} from "../../store/selectors";
import {logoutUser} from "../../store/actions/user";
import {storeUser} from "../../storage";

const Header = () => {
    const [visible, setVisible] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {user} = useSelector(selectUser);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleLogin = () => {
        history.push('/login');
        closeMenu();
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        storeUser({});
        history.push('/login');
        closeMenu();
    };

    const issetUser = !!Object.keys(user).length;

    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Content title="Atrealty Call App" subtitle="identification of phone number"/>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu}/>}>
                <Menu.Item onPress={issetUser ? handleLogout : handleLogin}
                           title={issetUser ? 'Logout' : 'Login'}/>
            </Menu>
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#20b6fd'
    }
});

export default Header;