'use client';

import { Text } from '@mantine/core';
import classes from './RedHeader.module.css';

export function RedHeader() {
  return <Text className={classes.red}>This should be red...</Text>;
}
