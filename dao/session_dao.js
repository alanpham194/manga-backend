'use strict';

module.exports = class {
    getAllSession(req,res){
        global.dbClient.query('SELECT * FROM manga_sessions ', (error, results) => {
          if (error) {
            throw error
          }
          console.log(results.rows)
          res.send(results.rows)
        })
      }

    insertSession(req,res){
        var device_token = req.body.device_token
        var country = req.body.country
        var ip = (req.headers['x-forwarded-for'] || '').split(',')[0]
            || req.connection.remoteAddress;
      console.log(req.body);
        global.dbClient.query('insert into manga_sessions values (DEFAULT,$1,$2,$3,$4)',
            [device_token,country,ip,'now()'],(err,results)=>{
                if (err) {
                    throw err
                }
                res.send(results)
        })
    }
  };