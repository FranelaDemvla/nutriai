import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { CardListItemProps } from './src/ui/CardListItem'
import { ListTextInput } from './src/ui/ListTextInput'
import { CardList } from './src/ui/CardList'
import { getAiResponse } from './src/services/openai'
import { HomeScreen } from './src/screens/HomeScreen'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    paddingTop: 32,
    alignItems: 'center',
    gap: 16,
  },
})
