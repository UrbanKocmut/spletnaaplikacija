import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider, Divider,Container} from "@chakra-ui/react"
import Quote from "./Quote";


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Container>
                <App name={"Janez"}/>
                <Divider/>
                <Quote/>
            </Container>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);