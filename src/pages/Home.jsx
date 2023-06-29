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
    Image,
    Flex,
    Avatar,
    Text,
    Tag,
    TagLabel,
    HStack
} from '@chakra-ui/react';
import { Kanit } from 'next/font/google';

const kanit = Kanit({ subsets: ['latin'], weight: '400' });

export default function Home() {
    return (
        <Center
            minHeight={'100vh'}
        >
            <Box
                minWidth={'lg'}
                backdropBlur={'10px'}
                boxShadow={'lg'}
                bg={'black'}
                borderRadius={'lg'}
                borderColor={'rgba(255, 255, 255, 0.3)'}
                backdropFilter={'blur(6px)'}
                p={8}
            >
                <Tabs colorScheme={'green'}>
                    <TabPanels>
                        <TabPanel index={'about'}>
                            <Image
                                h={'120px'}
                                w={'full'}
                                src={
                                    '/media/banners/29.06.2023.png'
                                }
                                objectFit={'cover'}
                                borderRadius={'sm'}
                            />
                            <Flex justify={'center'} mt={-12}>
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
                            <Text fontSize={'xl'} color={'green.300'}>snehasishTwT</Text>
                            <Text fontSize={'sm'}>@snehasish</Text>
                            <br />
                            <Text className={kanit.className} textTransform={'uppercase'} fontWeight={'bold'} color={'green.300'}>ABOUT ME</Text>
                            <Text>hey! i am <Text as={'span'} color={'green.300'}>snehasish</Text>. and i make some <Text as={'span'} color={'blue.300'}>awesome</Text> <Text as={'span'} color={'teal.300'}>stuff</Text> with <Text as={'span'} color={'red.300'}>code</Text>.</Text>
                            <br />
                            <Text className={kanit.className} textTransform={'uppercase'} fontWeight={'bold'} color={'green.300'}>ROLES</Text>
                            <HStack spacing={2}>
                                <Tag size='md' colorScheme='blue' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/boy.png'
                                        size='xs'
                                        name='boy'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>He/Him</TagLabel>
                                </Tag>
                                <Tag size='md' colorScheme='green' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/anime.png'
                                        size='xs'
                                        name='anime'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>16</TagLabel>
                                </Tag>
                                <Tag size='md' colorScheme='orange' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/india.png'
                                        size='xs'
                                        name='india'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>India</TagLabel>
                                </Tag>
                                <Tag size='md' colorScheme='blue' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/code.png'
                                        size='xs'
                                        name='code'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>Coding</TagLabel>
                                </Tag>
                                <Tag size='md' colorScheme='green' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/book.png'
                                        size='xs'
                                        name='book'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>Books</TagLabel>
                                </Tag>
                                <Tag size='md' colorScheme='red' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/physics.png'
                                        size='xs'
                                        name='physics'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>Physics</TagLabel>
                                </Tag>
                                <Tag size='md' colorScheme='yellow' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/planet.png'
                                        size='xs'
                                        name='planet'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>Astronomy</TagLabel>
                                </Tag>
                                <Tag size='md' colorScheme='green' borderRadius='full'>
                                    <Avatar
                                        src='/media/roles/anime.png'
                                        size='xs'
                                        name='anime'
                                        ml={-1}
                                        mr={2}
                                    />
                                    <TagLabel>Anime</TagLabel>
                                </Tag>
                            </HStack>
                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                    </TabPanels>
                    <TabList>
                        <Tab>About</Tab>
                        <Tab>Knowledge</Tab>
                        <Tab>Projects</Tab>
                        <Tab>Connections</Tab>
                        <Tab>Activity</Tab>
                        <Tab>Message</Tab>
                    </TabList>
                </Tabs>
            </Box>
        </Center>
    )
}
