import { Stack } from "expo-router"
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
