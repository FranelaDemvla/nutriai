import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
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
