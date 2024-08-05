console.info('contentScript is running')

import WPP from '@wppconnect/wa-js'

try {
  console.log('Injecting loader')
  WPP.webpack.injectLoader()
  WPP.chat.getActiveChat()
} catch (error) {
  console.error('Error injecting loader', error)
}
