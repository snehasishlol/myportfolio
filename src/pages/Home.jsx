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
    HStack,
    SimpleGrid
} from '@chakra-ui/react';
import { Kanit } from 'next/font/google';

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
                maxH={'80vh'}
                overflow={'scroll'}
                css={{ '&::-webkit-scrollbar': { width: '0' } }}
            >
                <Image
                    h={'100px'}
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
                <Box px={8} py={2}>
                    <Text fontSize={'xl'} color={'green.300'} textAlign={'center'}>snehasishTwT</Text>
                    <Text fontSize={'sm'} color={'gray.300'} textAlign={'center'}>@snehasish</Text>
                    <Text textAlign={'center'} my={2}>hey! i am <Text as={'span'} color={'green.300'}>snehasish</Text>. and i make some <Text as={'span'} color={'blue.300'}>awesome</Text> <Text as={'span'} color={'teal.300'}>stuff</Text> with <Text as={'span'} color={'red.300'}>code</Text>.</Text>
                    <br />
                    <Text className={kanit.className} textTransform={'uppercase'} fontWeight={'bold'} color={'green.300'}>ROLES</Text>
                    <Flex direction={'row'} flexWrap={'wrap'} gap={1}>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>He/Him</Tag>
                        <Tag size={'md'} colorScheme='green' borderRadius='full'>16</Tag>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>India</Tag>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>Programming</Tag>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>Books</Tag>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>Physics</Tag>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>Space</Tag>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>Anime</Tag>
                        <Tag size={'md'} colorScheme='blue' borderRadius='full'>Music</Tag>
                    </Flex>
                </Box>

                <Tabs colorScheme={'green'} isFitted>
                    <TabPanels>
                        <TabPanel index={'info'}>

                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                    </TabPanels>
                    <TabList>
                        <Tab>INFO</Tab>
                        <Tab>PROJECTS</Tab>
                        <Tab>SOCIALS</Tab>
                    </TabList>
                </Tabs>
            </Box>
        </Center>
    )
}
