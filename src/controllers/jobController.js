const job = {};

job.selectAll = (req, res) => {
  req.getConnection((err,conn)=>{
    if(err){
      console.log(err);
    }
    conn.query('SELECT * FROM user', (err, rows) =>{
      if(err){
        console.log(err);
      }
      console.log(rows[0].nombre);
      res.json(rows)
    });
  })
};

job.insert = (req, res) => {

};

job.edit = (req, res) => {

};

job.put = (req, res) => {

};

job.delete = (req, res) => {

};

module.exports = job;