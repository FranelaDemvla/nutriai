import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Text } from 'react-native-ui-lib'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import dayjs from 'dayjs'
import { DailyList } from '../ui/DailyList'
import Icon from 'react-native-vector-icons/Ionicons'

export const HomeScreen = () => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))

  const handleDateConfirm = (date: Date) => {
    setSelectedDate(dayjs(date))
    setIsDatePickerVisible(false)
  }

  const handlePreviousPage = () => {
    setSelectedDate(selectedDate.add(-1, 'day'))
  }

  const handleNextPage = () => {
    setSelectedDate(selectedDate.add(1, 'day'))
  }

  return (
    <View>
      <DateTimePickerModal
        date={selectedDate.toDate()}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setIsDatePickerVisible(false)}
      />
      <View style={styles.header}>
        <Text text40 color="white">
          {'NutriAI :)'}
        </Text>
      </View>
      <View style={styles.datePickerContainer}>
        <Pressable onPress={handlePreviousPage}>
          <Icon name="chevron-back" size={20} color="gray" />
        </Pressable>
        <Pressable
          style={styles.datePicker}
          onPress={() => setIsDatePickerVisible(true)}
        >
          <Text text60 color="grey">
            {dayjs(selectedDate).format('dddd D, MMMM YYYY')}
          </Text>
        </Pressable>
        <Pressable onPress={handleNextPage}>
          <Icon name="chevron-forward" size={20} color="gray" />
        </Pressable>
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
    backgroundColor: '#4c87d5',
    display: 'flex',
    padding: 16,
  },
  datePickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  datePicker: {
    paddingVertical: 16,
  },
})
