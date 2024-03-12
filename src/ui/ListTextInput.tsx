import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { TextField } from 'react-native-ui-lib'
import Icon from 'react-native-vector-icons/Ionicons'

type ListTextInputProps = {
  value: string
  onChange: (setState: string) => void
  onPress: () => void
}

export const ListTextInput = ({
  onPress,
  value,
  onChange,
}: ListTextInputProps) => {
  return (
    <View style={styles.textEntryContainer}>
      <TextField
        placeholder="New entry"
        value={value}
        onChangeText={onChange}
      />
      <Pressable onPress={onPress}>
        <Icon name="send" size={20} color="gray" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  textEntryContainer: {
    backgroundColor: '#b1edf1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 16,
    width: '100%',
  },
})
