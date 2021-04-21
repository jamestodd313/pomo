// import your styles so they can be processed by webpack
// ** all of your styles should be @use(d) in main.scss, making main.scss the only stylesheet imported here **
import './scss/main.scss'

// import your scripts
// ** all of your scripts should be imported to app.js, making app.js the only js file imported here **
import {run} from './js/app'

// run app
run()