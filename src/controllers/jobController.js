const jobController = {}

jobController.home = (req,res) =>{
    req.getConnection((err,conn)=>{
        if(err){
          console.log(err);
        }
        else{
          conn.query('SELECT * FROM user', (err, rows) =>{
            if(err){
              console.log(err);
            }
            console.log(rows)
            res.render('../views/home.pug',{
                data: rows,
            });
          });
        }
      })
}

module.exports = jobController;