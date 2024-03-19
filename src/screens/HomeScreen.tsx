import React, { useState } from 'react'
import { getAiResponse } from '../services/openai'
import { CardList } from '../ui/CardList'
import { CardListItemProps } from '../ui/CardListItem'
import { ListTextInput } from '../ui/ListTextInput'
import { View, StyleSheet, Pressable } from 'react-native'
import { Text } from 'react-native-ui-lib'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import dayjs from 'dayjs'

export const HomeScreen = () => {
  const [newEntry, setNewEntry] = useState('')
  const [cardList, setCardList] = useState<CardListItemProps[]>([])
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))

  const handleTextInputOnPress = async () => {
    const result = await getAiResponse(newEntry)

    if (result) {
      setCardList([...cardList, { title: newEntry, info: result }])
    }

    setNewEntry('')
  }

  const handleDateConfirm = (date: Date) => {
    setSelectedDate(dayjs(date))
    setIsDatePickerVisible(false)
  }

  return (
    <View>
      <View style={styles.header}>
        <Text text40>NutriAI</Text>
        <Pressable
          style={styles.datePicker}
          onPress={() => setIsDatePickerVisible(true)}
        >
          <Text text60 color="grey">
            {dayjs(selectedDate).format('dddd D, MMMM YYYY')}
          </Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setIsDatePickerVisible(false)}
        />
      </View>
      <View style={styles.container}>
        {cardList && <CardList items={cardList} />}
        <ListTextInput
          value={newEntry}
          onChange={setNewEntry}
          onPress={handleTextInputOnPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    gap: 16,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
  },
  datePicker: {
    paddingVertical: 16,
  },
})
