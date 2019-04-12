var logger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }