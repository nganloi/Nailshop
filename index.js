const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer');
var bodyParser = require('body-parser')
const { userInfo } = require('os')
const { name } = require('ejs')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const port = 3000
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/upload/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage }); 
const dashboardRouter = require('./router/dashboard.js')
const adminRouter = require('./router/admin.js')
app.use('/', dashboardRouter)
app.use('/admin', adminRouter)


app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
  })