import TelegramBot from 'node-telegram-bot-api'
import cron from 'node-cron'

import 'dotenv/config'

import { randomDigit } from './lib/utils'

//* BOT RED GREEN 1

const greetings = ['hi', 'hey', 'hello', 'chào', 'chao']

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN_BOT_2 as string, {
  polling: true
})

let value: number | undefined
const chat_ids: number[] = []

bot.on('message', (msg) => {
  const words = msg.text?.split(' ')
  console.log(msg)
  words?.forEach((word) => {
    if (greetings.includes(word.toLowerCase())) {
      bot.sendMessage(msg.chat.id, `Xin chào ${msg.from?.first_name}`)
      chat_ids.push(msg.chat.id)
    }
  })
})

cron.schedule('15 * * * * *', async () => {
  console.log(new Date().toUTCString())
  value = randomDigit()
  ;[...new Set(chat_ids)].forEach((chat_id) => {
    bot.sendMessage(
      chat_id,
      ` ${(value as number) % 2 === 1 ? 'XANH' : 'ĐỎ'} ${(value as number) % 2 === 0 ? '🔴' : '🟢'} `
    )
  })
})
