import updateNotifier from 'update-notifier'
import packageJson from '../package.json' assert { type: 'json' }
import { hello } from './hello'

updateNotifier({ pkg: packageJson }).notify()
hello()
