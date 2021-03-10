import './App.css';
import PropTypes from "prop-types";
import {useState} from "react";
import { Input,Container,Button,Box,Flex } from "@chakra-ui/react"

export default function App(props, state) {

    const [name, setName] = useState(props.name);
    const [input, setInput] = useState();

    function inputChanged(event) {
        const {target: {value}} = event;
        setInput(value)
    }

    function changeName(event) {
        setName(input)
    }

    return (
        <Container>
            <Box  w="100%" p={4}>
                {name}
            </Box>
            <Flex>
                <Input onChange={inputChanged} placeholder="Basic usage" />
                <Button marginLeft={2} onClick={changeName} colorScheme="blue">Button</Button>
            </Flex>
        </Container>
    );
}

App.propTypes = {
    name: PropTypes.string
};