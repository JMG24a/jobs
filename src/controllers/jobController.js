const jobController = {}

//view home
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
        res.render('../views/home.pug',{
            data: rows,
        });
      });
    }
  })
}

//inserts
jobController.insert = (req,res) =>{
  const data = req.body;
  console.log(data)
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

jobController.insertAddress = (req,res) =>{
  const {id} = req.params;
  const data = req.body;
  const insert = {
    country: data.country,
    city: data.city,
    state: data.state,
    id_employee: id
  }
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err)
    }else{
      conn.query('INSERT INTO Addresses set ?', [insert] ,(err,rows)=>{
        if(err){
          res.send(err)
        }else{
          console.log(rows)
          res.redirect(`/profile/${id}`);
        }
      })
    }
  })
}

jobController.insertAssigned = (req,res) =>{
  const {id} = req.params;
  const data = req.body;
  const insertProfile = {
    description: data.descriptionP,
    id_employee: id
  }
  const insertAssigned = {
    promotion: data.promotion,
    house: data.house,
    car: data.car,
    id_employee: id
  }
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err)
    }else{
      conn.query('INSERT INTO Profiles set ?',[insertProfile],(err,row)=>{
        if(err){
          res.send(err)
        }
      })
    }
  })
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err)
    }else{
      conn.query('INSERT INTO Assigneds set ?', [insertAssigned] ,(err,rows)=>{
        if(err){
          res.send(err);
        }else{
          console.log(rows)
          res.redirect(`/profile/${id}`);
        }
      })
    }
  })
}
jobController.jobs = (req,res)=>{
  const {id} = req.params;
  const data = {
    client: req.body.client,
    description: req.body.description,
    price: req.body.price,
    id_employee: id
  }

  req.getConnection((err,conn)=>{
    if(err){
      console.log(err);
    }
    else{
      conn.query('INSERT INTO Jobs set ?', [data] ,(err, rows) =>{
        if(err){
          console.log(err);
        }else{
          res.redirect(`/profile/${id}`);
        }
      });
    }
  })
}
//wiew profile
jobController.profile = (req,res) =>{
  const data = req.params

  let emp , add , ass , pro, work
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err);
    }else{
      conn.query('SELECT * FROM Employees WHERE id = ?', [data.id] , (err,Emp) =>{
        if(err){
          res.send(err);
        }else{
          emp = Emp;
          console.log(emp)
        }
      })
      conn.query('SELECT * FROM Addresses WHERE id_employee = ?', [data.id] , (err,Add) =>{
        if(err){
          res.send(err);
        }else{
          add = Add
          console.log(add)
        }
      })
      conn.query('SELECT * FROM Assigneds WHERE id_employee = ?', [data.id] , (err,Ass) =>{
        if(err){
          res.send(err);
        }else{
          ass = Ass
          console.log(ass)
        }
      })
      conn.query('SELECT * FROM Jobs WHERE id_employee = ?', [data.id] , (err,Work) =>{
        if(err){
          res.send(err);
        }else{
          work = Work;
          console.log(work)
        }
      })
      conn.query('SELECT * FROM Profiles WHERE id_employee = ?', [data.id] , (err,Pro) =>{
        if(err){
          res.send(err);
        }else{
          pro = Pro
          console.log(pro)
          res.render('../views/profile.pug',{
            emp: emp,
            add: add, 
            ass: ass,
            work: work,
            pro: pro
          })
        }
      })
    }
  })
}
//updates
jobController.updateE = (req,res) =>{
  const {id}= req.params;
  const data = req.body;

  req.getConnection((err,conn)=>{
    if(err){
      res.send(err);
    }else{
      conn.query('UPDATE Employees set ? WHERE id = ?', [data,id], (err,row)=>{
        if(err){
          res.send(err)
        }else{
          console.log(row)
          res.redirect(`/profile/${id}`)
        }
      })
    }
  })
}

jobController.updateD = (req,res) =>{
  const {id}= req.params;
  const data = req.body;

  req.getConnection((err,conn)=>{
    if(err){
      res.send(err);
    }else{
      conn.query('UPDATE Addresses set ? WHERE id_employee = ?', [data,id], (err,row)=>{
        if(err){
          res.send(err)
        }else{
          console.log(row)
          res.redirect(`/profile/${id}`)
        }
      })
    }
  })
}

jobController.updateP = (req,res) =>{
  const {id} = req.params;
  const data = req.body;
  const insertProfile = {
    description: data.descriptionP,
    id_employee: id
  }
  const insertAssigned = {
    promotion: data.promotion,
    house: data.house,
    car: data.car,
    id_employee: id
  }
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err);
    }else{
      conn.query('UPDATE Profiles set ? WHERE id_employee = ?', [insertProfile,id], (err,row)=>{
        if(err){
          res.send(err)
        }
      })
    }
  })
  req.getConnection((err,conn)=>{
    if(err){
      res.send(err);
    }else{
      conn.query('UPDATE Assigneds set ? WHERE id_employee = ?', [insertAssigned,id], (err,row)=>{
        if(err){
          res.send(err)
        }else{
          console.log(row)
          res.redirect(`/profile/${id}`)
        }
      })
    }
  })
}

//deletes
jobController.delete = (req,res) =>{
  const data = req.params;
  req.getConnection((err,conn) =>{
    if(err){
      res.send(err);
    }else{
      conn.query('DELETE FROM Employees WHERE id = ?', [data.id], (err,row)=>{
        if(err){
          res.send(err);
        }else{
          res.redirect('/home');
        }
      })
    }
  })
}
module.exports = jobController;