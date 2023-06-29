'use client';

import './globals.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const themeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({ themeConfig })

export default function RootLayout({
    children,
}) {
    return (
        <html lang='en'>
            <head />
            <body className={inter.className}>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        {children}
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    )
}