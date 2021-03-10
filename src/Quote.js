import './App.css';
import {Box, Heading, Container,Text} from "@chakra-ui/react"
import {useEffect, useState} from "react"

export default function Quote() {

    const [quote, setQuote]  = useState({author: '', quote: ''});


    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random()*quotes.length)])
        // eslint-disable-next-line
    },[]);

    const quotes = [
        {
            author: "Janez",
            quote: "Jaz sem Janez."
        },
        {
            author: "Matjaž",
            quote: "Jaz sem Matjaž."
        },
        {
            author: "Miran",
            quote: "Jaz sem Miran."
        }
    ];

    return (
        <Container>
            <Box>
                <Heading>
                    {quote.quote}
                </Heading>
                <Text>
                    {quote.author}
                </Text>
            </Box>
        </Container>
    );
}
