const jobController = {}

jobController.home = (req,res) =>{
  req.getConnection((err,conn)=>{
    if(err){
      console.log(err);
    }
    else{
      conn.query('SELECT * FROM Employees', (err, rows) =>{
        if(err){
          console.log(err);
        }
        data1 = rows  
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
      conn.query('INSERT INTO Employees set ?', [data] ,(err,rows)=>{
        if(err){
          res.send(err)
        }else{
          console.log(rows)
          res.redirect('/home');
        }
      })
    }
  })
}

jobController.profile = (req,res) =>{
  const data = req.params
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err);
    }else{
      conn.query('SELECT * FROM Employees WHERE id = ?' [data.id] , (err,row) =>{
        if(err){
          res.send(err);
        }else{
          res.render('../views/profile.pug',{
            data: row,
          }
          )
        }
      })
    }
  })
}
module.exports = jobController;