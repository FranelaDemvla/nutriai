import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardList } from './CardList'
import { ListTextInput } from './ListTextInput'
import { CardListItemProps } from './CardListItem'
import { getAiResponse } from '../services/openai'
import AsyncStorage from '@react-native-async-storage/async-storage'

type DailyListProps = {
  day: string
}

export const DailyList = ({ day }: DailyListProps) => {
  const [newEntry, setNewEntry] = useState('')
  const [cardList, setCardList] = useState<CardListItemProps[]>([])

  useEffect(() => {
    AsyncStorage.getItem(day).then((data) => {
      if (data) {
        setCardList(JSON.parse(data))
      } else {
        setCardList([])
      }
    })
  }, [day])

  const handleTextInputOnPress = async () => {
    const result = await getAiResponse(newEntry)
    if (result) {
      const newCardList = [...cardList, { title: newEntry, info: result }]
      setCardList(newCardList)
      await AsyncStorage.setItem(day, JSON.stringify(newCardList))
    }
    setNewEntry('')
  }

  return (
    <View>
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
})
