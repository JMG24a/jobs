const jobApiController = {};

jobApiController.selectAll = (req, res) => {
  req.getConnection((err,conn)=>{
    if(err){
      console.log(err);
    }
    else{
      conn.query('SELECT * FROM user', (err, rows) =>{
        if(err){
          console.log(err);
        }
        res.json(rows);
      });
    }
  })
};

jobApiController.insert = (req, res) => {
  data = req.body;
  req.getConnection((err, conn) =>{
    if(err){
      console.log(err);
    }
    else{
      conn.query('INSERT INTO user set ? ' , [data], (err, rows) =>{
        if(err){
          console.log(err);
        }else{
          console.log(rows);
          res.json({registro: 'exitoso'});
        }
      })
    }
  })
};

jobApiController.put = (req, res) => {
  const {id} = req.params;
  const data = req.body;
  req.getConnection((err,conn) =>{
    console.log(req.headers)
    if(err){
      send.json(err);
    }else{
      conn.query('UPDATE user set ? WHERE id = ?', [data , id], (err,row) =>{
        if(err){
          res.json(err);
        }
        else{
          res.json({'respuesta': 'exitosa'});
        }
      })
    }
  })
};

jobApiController.delete = (req, res) => {
  const {id} = req.params;
  req.getConnection((err, conn) =>{
      if(err){
        res.json(err);
      }
      else{
      conn.query('DELETE FROM user WHERE id = ?', [id] , (err, row) =>{
        if(err){
          res.send(err);
        }else{
          console.log(row);
          res.json({'respuesta': 'exitosa'});
        }
      })
    }
  })
};

module.exports = jobApiController;


