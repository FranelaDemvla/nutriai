import React, { useState } from 'react'
import { getAiResponse } from '../services/openai'
import { CardList } from '../ui/CardList'
import { CardListItemProps } from '../ui/CardListItem'
import { ListTextInput } from '../ui/ListTextInput'

export const HomeScreen = () => {
  const [newEntry, setNewEntry] = useState('')
  const [cardList, setCardList] = useState<CardListItemProps[]>([])

  const handleTextInputOnPress = async () => {
    const result = await getAiResponse(newEntry)

    if (result) {
      setCardList([...cardList, { title: newEntry, info: result }])
    }

    setNewEntry('')
  }

  return (
    <>
      {cardList && <CardList items={cardList} />}
      <ListTextInput
        value={newEntry}
        onChange={setNewEntry}
        onPress={handleTextInputOnPress}
      />
    </>
  )
}
