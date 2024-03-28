// MainAppbar.js
import React from 'react';
import { Appbar } from 'react-native-paper';

export const MainAppbar = ({ title }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
