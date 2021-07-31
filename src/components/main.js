import React, {useEffect} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Header from "./header";
import MainPage from "./pages/main-page";
import {LoginPage} from "./pages";
import {retrieveUser} from "../store/actions/user";
import {useDispatch} from "react-redux";

const Main = () => {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(retrieveUser());
        }, []);

        return (
            <>
                <NativeRouter>
                    <Header/>
                    <Route path="/" component={MainPage} exact/>
                    <Route path="/login" component={LoginPage}/>
                </NativeRouter>
            </>
        )
    }
;

export default Main;