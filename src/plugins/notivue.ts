import app from './app'

import { createNotivue } from 'notivue'

import 'notivue/notification.css' // Only needed if using built-in <Notification />
import 'notivue/animations.css' // Only needed if using default animations
import 'notivue/notification-progress.css'

const notivue = createNotivue({
    position: 'top-right',
    pauseOnHover: true,  
})

app.use(notivue)