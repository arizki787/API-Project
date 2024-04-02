const express = require("express");
const app = express();
const dbconnection = require("./connection");

const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hai guis!");
});


app.get("/db-pgadmin", async(req, res) => {
  try {
    // For pool initialization, see above
    const [result] = await dbconnection.query('SELECT * FROM student');
    res.send(result);
    // Connection is automatically released when query resolves
  } catch (err) {
    console.log(err);
  }
});
app.get("/db-pgadmin/db-id", async(req, res) => {
  try {
    const {sid} = req.body;
    const [rows, fields] = await dbconnection.query(`SELECT * FROM student WHERE sid = ${sid}`);
    res.send(rows);
  } catch (err) {
    console.log(err);
  }
});

app.post("/db-pgadmin/db-create", async(req,res) => {
  try{
    const {sid, sname, uktstatus, alamat, email} = req.body
    if (!sid || !sname || !uktstatus || !alamat || !email) {
      return res.status(400).json({ error: "Semua bidang harus diisi!" });
    }
    const [result] = await dbconnection.query(`insert into student values (${sid}, '${sname}', ${uktstatus}, '${alamat}', '${email}')`);
    res.json(
      {
        data: {
          result,
          sid: sid,
          sname: sname,
          uktstatus: uktstatus,
        },
        message: "user created!"
      }
    );
  }catch(err){
    console.log(err);
  }
})

app.patch("/db-pgadmin/db-ubah", async(req, res) => {
  try {
    const {sid, sname, uktstatus, alamat, email} = req.body
    // if (!sid || !sname || !uktstatus || !alamat || !email) {
    //   return res.status(400).json({ error: "Semua bidang harus diisi!" });
    // }
    const sql = `UPDATE student SET sname = '${sname}', uktstatus = ${uktstatus}, alamat = '${alamat}', email = '${email}' WHERE sid = ${sid}`;
    const [result, fields] = await dbconnection.query(sql);
    res.send(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})

app.delete("/db-pgadmin/db-hapus", async(req, res) => {
  try {
    const sid = req.body.sid
    const sql = `DELETE FROM student WHERE sid = ${sid}`;
  
    const [result, fields] = await dbconnection.query(sql);
    
    res.send(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));