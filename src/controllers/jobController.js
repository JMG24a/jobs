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

jobController.insert = (req,res) =>{
  const data = req.body;
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err)
    }else{
      conn.query('INSERT INTO user set ?', [data] ,(err,rows)=>{
        if(err){
          res.send(err)
        }else{
          res.redirect('/home');
        }
      })
    }
  })
}

module.exports = jobController;