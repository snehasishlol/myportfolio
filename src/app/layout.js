'use client';

import './globals.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

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
            <body>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        {children}
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    )
}