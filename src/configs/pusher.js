import Pusher from 'Pusher'

Pusher.logToConsole = process.env.NODE_ENV === 'dev'
const pusher = new Pusher(process.env.PUSHER_TOKEN, {
  cluster: 'eu',
  encrypted: true
})

export { pusher }
