const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'jmg24a', 
     password: 'Mysql.jmgy24',
     connectionLimit: 5
});

const job = {};

job.selectAll = (req, res) => {
    async function asyncFunction() {
        let conn;
        try {
          conn = await pool.getConnection();
          const rows = await conn.query("SELECT * FROM user");
          rows.forEach((rows) => {
            console.log(rows)
        }) //[ {val: 1}, meta: ... ]
      
        } catch (err) {
          throw err;
        } finally {
          if (conn) return conn.end();
        }
      }
      asyncFunction();
      return 0;
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