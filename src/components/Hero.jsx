'use client';

import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

export default function Hero() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Welcome to <br />
                        <Text as={'span'} color={'green.400'}>
                            NextJS + ChakraUI
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        This is a site made using the NextJS + ChakraUI Template made with 💚 by <Link href={"https://snehasish.cf"}>@snehasishkun</Link>
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Link
                            bg={"green.400"}
                            borderRadius={"md"}
                            color={"white"}
                            p={3}
                            textDecor={"none"}
                            _hover={{
                                bg: "green.500",
                                textDecor: "none"
                            }}
                            href={"https://github.com/snehasishkun/nextjs-chakraui-template"}>
                            Start Using Now
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}