import React from 'react'
import { CardListItem, CardListItemProps } from './CardListItem'

export type CardListProps = {
  items: CardListItemProps[]
}

export const CardList = ({ items }: CardListProps) => {
  return (
    <>
      {items.map((i) => (
        <CardListItem title={i.title} info={i.info} key={i.title} />
      ))}
    </>
  )
}
