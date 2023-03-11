"use client";

import React from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import {
    FiMenu,
    FiChevronDown,
} from 'react-icons/fi';
import ToggleColorModeButton from './ToggleColorModeButton';
import { Link } from '@chakra-ui/next-js';

export default function Dashboard({
    title,
    items,
    user_name,
    user_text,
    user_avatar,
    children,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                title={title}
                items={items}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} title={title} items={items} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} title={title} user_name={user_name} user_text={user_text} user_avatar={user_avatar} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ title, items, onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    {title || "Dashboard"}
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {items?.map((item) => (
                <NavItem key={item.name} icon={item.icon} href={item.href} active={item.active}>
                    {item.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, href, active, children, ...rest }) => {

    return (
        <Link href={`${href}`} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align={"center"}
                borderRadius={"md"}
                cursor="pointer"
                bg={active ? "whiteAlpha.200" : "transparent"}
                _hover={{
                    bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
                }}
                m={2}
                {...rest}>
                <HStack>
                    {icon && (
                        <IconButton
                            variant={"ghost"}
                            p={0}
                            m={0}>
                            {icon}
                        </IconButton>
                    )}
                    <Text>{children}</Text>
                </HStack>
            </Flex>
        </Link>
    );
};

const MobileNav = ({ title, user_name, user_avatar, user_text, onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontWeight="semibold">
                {title || "Dashboard"}
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <ToggleColorModeButton />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={user_avatar}
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{user_name || "User"}</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        {user_text || " "}
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};