import OneSignal from 'OneSignal'

const config = {
  appId: process.env.ONESIGNAL_APP_ID,
  autoRegister: true,
  notifyButton: {
    enable: true
  }
}

if (process.env.NODE_ENV === 'dev') {
  config.subdomainName = 'postal-dev'
}

OneSignal.push(["init", config])

export { OneSignal }
