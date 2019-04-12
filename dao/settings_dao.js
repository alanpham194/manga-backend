module.exports = class {
    getActiveService(req,res){
        global.dbClient.query('SELECT value FROM manga_settings where key = $1 ',['ACTIVATE_SERVICE'], (error, results) => {
            if (error) {
                throw error
            }
        var ip = (req.headers['x-forwarded-for'] || '').split(',')[0]
            || req.connection.remoteAddress;
        console.log(req.body);
        global.dbClient.query('insert into manga_sessions values (DEFAULT,$1,$2,$3,$4,$5)',
            [null,null,ip,'now()',false],(err,results)=>{
                if (err) {
                    throw err
                }
            });
        console.log(results.rows)
        if (results.rows.length == 0){
            res.send({
                "data":false
            })
        } else {
            if (results.rows[0].value){
                global.dbClient.query("select * from manga_sessions where black = true and ip = $1",[ip],(err,results)=>{
                    if (err){
                        res.send({
                            "data":false
                        })
                    } else if (results.rows.length>0){
                        res.send({
                            "data":false
                        })
                    } else {
                        res.send({
                            "data":true
                        })
                    }
                });
            } else {
                res.send({
                    "data":false
                })
            }
        }
        })
    }
    setActiveService(req,res){
        var active = req.body.active;
        console.log(active);
        if (active == null){
            active = false
        }
        global.dbClient.query('update manga_settings set value = $1 where key = $2 ',
            [active,'ACTIVATE_SERVICE'], (error, results) => {
            if (error) {
                throw error
            }
            res.send({
                "data":active
            })

        })
    }
}