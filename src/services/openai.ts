import { nutritionFacts } from "./models"
import {OPENAI_KEY} from "@env"

export const getAiResponse = async (
    prompt: string
  ): Promise<nutritionFacts | undefined> => {
    const gptMessages = [
      {
        role: 'system',
        content:
          'You are a helpful assistant with great knowledge about nutrition facts of food and drinks. Respond with the calories and nutrients of the food/drink/dish given in the prompt. Provide the answer in a JSON structure that follows this schema: { calories: <number of calories>, protein: <number of total proteins in grams>, fat: <number of total fats in grams>, sugar: <number of sugar in grams>, totalCarbs: <number of total carbohydrates in grams>, sodium: <number of total sodium in miligrams> }',
      },
      {
        role: 'user',
        content: `I want to know the nutrition facts of ${prompt}`,
      },
    ]
  
    return fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: gptMessages,
        response_format: { type: "json_object" },
      }),
    })
      .then((response) => response.json())
      .then((data) => JSON.parse(data.choices[0].message.content))
  }