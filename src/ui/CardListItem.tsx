import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-ui-lib'
import { nutritionFacts } from '../services/models'

export type CardListItemProps = {
  title: string
  info: nutritionFacts
}

export const CardListItem = ({ title, info }: CardListItemProps) => {
  return (
    <View style={styles.container}>
      <Text white text60>
        {title}
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsContainerSection}>
          <Text white text70BO>
            {info.calories}
          </Text>
          <Text white text70>
            calories
          </Text>
        </View>
        <View style={styles.detailsContainerSection}>
          <Text white text70BO>
            {info.protein}
          </Text>
          <Text white text70>
            protein
          </Text>
        </View>
        <View style={styles.detailsContainerSection}>
          <Text white text70BO>
            {info.fat}
          </Text>
          <Text white text70>
            fat
          </Text>
        </View>
        <View style={styles.detailsContainerSection}>
          <Text white text70BO>
            {info.sugar}
          </Text>
          <Text white text70>
            sugar
          </Text>
        </View>
        <View style={styles.detailsContainerSection}>
          <Text white text70BO>
            {info.totalCarbs}
          </Text>
          <Text white text70>
            total carbs
          </Text>
        </View>
        <View style={styles.detailsContainerSection}>
          <Text white text70BO>
            {info.sodium}
          </Text>
          <Text white text70>
            sodium
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c87d5',
    borderRadius: 10,
    padding: 16,
    width: '100%',
  },
  detailsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  detailsContainerSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})
