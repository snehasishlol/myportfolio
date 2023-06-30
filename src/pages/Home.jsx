'use client';

import React from 'react';
import {
    Box,
    Center,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Flex,
    Avatar,
    Text,
    Tag,
    TagLabel,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Button,
    Image,
    HStack,
    VStack
} from '@chakra-ui/react';
import { Kanit } from 'next/font/google';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import projects from '@/data/projects';
import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { BsDiscord, BsSpotify } from 'react-icons/bs';

const kanit = Kanit({ subsets: ['latin'], weight: '400' });

export default function Home() {
    return (
        <Center
            minHeight={'100vh'}
        >
            <Box
                w={{ base: 'xs', sm: 'sm', md: '3xl' }}
                backdropBlur={'10px'}
                boxShadow={'lg'}
                bg={'black'}
                borderRadius={'lg'}
                borderColor={'rgba(255, 255, 255, 0.3)'}
                backdropFilter={'blur(6px)'}
                p={4}
                minH={'50vh'}
                h={'60vh'}
                maxH={'60vh'}
                overflow={'scroll'}
                css={{ '&::-webkit-scrollbar': { width: '0' } }}
            >
                <Tabs colorScheme={'green'} isFitted>
                    
                <TabList>
                        <Tab>INFO</Tab>
                        <Tab>PROJECTS</Tab>
                        <Tab>SOCIALS</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel index={'info'}>
                            <Flex justify={'center'}>
                                <Avatar
                                    size={'xl'}
                                    src={
                                        '/media/avatars/29.06.2023.jpg'
                                    }
                                    alt={'snehasish'}
                                    css={{
                                        border: '5px solid black'
                                    }}
                                />
                            </Flex>
                            <Box px={8} py={2}>
                                <Text fontSize={'xl'} color={'green.300'} textAlign={'center'}>snehasishTwT</Text>
                                <Text fontSize={'sm'} color={'gray.300'} textAlign={'center'}>@snehasish</Text>
                                <Text textAlign={'center'} my={2}>hey! i am <Text as={'span'} color={'green.300'}>snehasish</Text>. and i make some <Text as={'span'} color={'blue.300'}>awesome</Text> <Text as={'span'} color={'teal.300'}>stuff</Text> with <Text as={'span'} color={'red.300'}>code</Text>.</Text>

                                <br />

                                <Flex flexWrap={'wrap'} flexDirection={'row'} gap={2}>
                                    <Tag size='sm' colorScheme='yellow' borderRadius='full' variant={'outline'}>
                                        <Avatar
                                            src='/media/languages/js.png'
                                            size='xs'
                                            name='Javascript'
                                            ml={-1}
                                            mr={2}
                                        />
                                        <TagLabel>Javascript</TagLabel>
                                    </Tag>
                                    <Tag size='sm' colorScheme='green' borderRadius='full' variant={'outline'}>
                                        <Avatar
                                            src='/media/languages/nodejs.png'
                                            size='xs'
                                            name='NodeJS'
                                            ml={-1}
                                            mr={2}
                                        />
                                        <TagLabel>NodeJS</TagLabel>
                                    </Tag>
                                    <Tag size='sm' colorScheme='teal' borderRadius='full' variant={'outline'}>
                                        <Avatar
                                            src='/media/languages/nextjs.svg'
                                            size='xs'
                                            name='NextJS'
                                            ml={-1}
                                            mr={2}
                                            bg={'white'}
                                        />
                                        <TagLabel>NextJS</TagLabel>
                                    </Tag>
                                    <Tag size='sm' colorScheme='orange' borderRadius='full' variant={'outline'}>
                                        <Avatar
                                            src='/media/languages/html.png'
                                            size='xs'
                                            name='HTML'
                                            ml={-1}
                                            mr={2}
                                        />
                                        <TagLabel>HTML</TagLabel>
                                    </Tag>
                                    <Tag size='sm' colorScheme='blue' borderRadius='full' variant={'outline'}>
                                        <Avatar
                                            src='/media/languages/css.png'
                                            size='xs'
                                            name='CSS'
                                            ml={-1}
                                            mr={2}
                                        />
                                        <TagLabel>CSS</TagLabel>
                                    </Tag>
                                    <Tag size='sm' colorScheme='yellow' borderRadius='full' variant={'outline'}>
                                        <Avatar
                                            src='/media/languages/python.png'
                                            size='xs'
                                            name='Python'
                                            ml={-1}
                                            mr={2}
                                        />
                                        <TagLabel>Python</TagLabel>
                                    </Tag>
                                </Flex>
                            </Box>
                        </TabPanel>
                        <TabPanel index={'projects'}>
                            {
                                projects?.map((project, i) => (
                                    <Box
                                        px={4}
                                        py={5}
                                        borderWidth="1px"
                                        _hover={{ shadow: 'lg' }}
                                        bg={'gray.800'}
                                        position="relative"
                                        rounded="md"
                                        w={'full'}
                                        my={2}
                                        key={i}
                                    >
                                        <Flex justifyContent="space-between">
                                            <Flex>
                                                <Image
                                                    rounded="full"
                                                    w={16}
                                                    h={16}
                                                    objectFit="cover"
                                                    fallbackSrc="https://via.placeholder.com/150"
                                                    src={project.image}
                                                    alt={project.name}
                                                />
                                                <Stack spacing={2} pl={3} align="left">
                                                    <Heading align="left" fontSize="xl">
                                                        {project.name}
                                                    </Heading>
                                                    <Text align="left" fontSize="sm">
                                                        {project.details}
                                                    </Text>
                                                    <HStack spacing={4}>
                                                        <Button as={Link} href={project.href} colorScheme={'green'} size={'xs'}>Visit</Button>
                                                        <Button as={Link} href={project.code} colorScheme={'blue'} size={'xs'}>Source</Button>
                                                    </HStack>
                                                </Stack>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                ))
                            }
                        </TabPanel>
                        <TabPanel index={'socials'}>
                            <VStack spacing={4}>
                                <Button as={Link} href={'https://instagram.com/snehasishlol'} color={'pink.300'} variant={'unstyled'} leftIcon={<FiInstagram />}>Instagram</Button>
                                <Button as={Link} href={'https://twitter.com/snehasishlol'} color={'blue.300'} variant={'unstyled'} leftIcon={<FiTwitter />}>Twitter</Button>
                                <Button as={Link} href={'https://youtube.com/@snehasishlol'} color={'red.300'} variant={'unstyled'} leftIcon={<FiYoutube />}>YouTube</Button>
                                <Button as={Link} href={'https://open.spotify.com/user/31momuam5cf3a6gdw6r47sdcs55q'} color={'green.300'} variant={'unstyled'} leftIcon={<BsSpotify />}>Spotify</Button>
                                <Button as={Link} href={'https://discord.gg/Mxczhv4p4M'} color={'purple.300'} variant={'unstyled'} leftIcon={<BsDiscord />}>Discord</Button>
                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Center>
    )
}
