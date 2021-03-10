import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
    <React.StrictMode>
        {/*<ChakraProvider>*/}
        {/*    <Container>*/}
        {/*        <App name={"Janez"}/>*/}
        {/*        <Divider/>*/}
        {/*        <Quote/>*/}
        {/*    </Container>*/}
        {/*</ChakraProvider>*/}
        <p>hi</p>
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorkerRegistration.register();