import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Text } from 'react-native-ui-lib'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import dayjs from 'dayjs'
import { DailyList } from '../ui/DailyList'

export const HomeScreen = () => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))

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
          date={selectedDate.toDate()}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setIsDatePickerVisible(false)}
        />
      </View>
      <DailyList day={dayjs(selectedDate).format('DD-MM-YYYY')} />
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
