import './App.css';
import {Box, Heading, Container} from "@chakra-ui/react"

export default function Quote() {

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
                    {quotes[Math.floor(Math.random())*quotes.length].quote}
                </Heading>
            </Box>
        </Container>
    );
}
