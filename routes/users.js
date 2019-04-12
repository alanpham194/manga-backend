var express = require('express');
var router = express.Router();


const UserDao = require('../dao/session_dao')
const SettingDao = require('../dao/settings_dao')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/device-token',function(req,res,next){

});

router.get('/sessions',function(req,res,next){
  var userDao = new UserDao()
  userDao.getAllSession(req,res)
    
});

router.post('/sessions',function(req,res,next){
  var userDao = new UserDao()
  userDao.insertSession(req,res)
});

router.get('/activate',function (req,res,next) {
  var settingDao = new SettingDao()
  settingDao.getActiveService(req,res)
});

router.post('/activate',function (req,res,next) {
  var settingDao = new SettingDao()
  settingDao.setActiveService(req,res)
});

module.exports = router;
