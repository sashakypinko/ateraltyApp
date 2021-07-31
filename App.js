import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import {Provider as PaperProvider} from "react-native-paper";
import NumberDetectionTask from "./NumberDetection";
import initStore from './src/store';
import Main from "./src/components/main";

const store = initStore();

const App = () => {

    useEffect(() => {
        NumberDetectionTask.startService();
    }, []);

    return (
        <PaperProvider>
            <Provider store={store}>
                <Main/>
            </Provider>
        </PaperProvider>
    );
};

export default App;
