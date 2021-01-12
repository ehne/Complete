/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../lib/theme';

const app = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default app;
