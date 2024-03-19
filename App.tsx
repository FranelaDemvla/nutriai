import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { Colors, Typography, Spacings } from 'react-native-ui-lib'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
})

Typography.loadTypographies({
  heading: { fontSize: 36, fontWeight: '600' },
  subheading: { fontSize: 28, fontWeight: '500' },
  body: { fontSize: 18, fontWeight: '400' },
})

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
})

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
    paddingTop: 30,
  },
})
