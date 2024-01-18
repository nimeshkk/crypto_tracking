import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db =mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"crypto"
    }
);

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello")
})

app.get("/crypto_details",(req,res)=>{
    const q = "SELECT * FROM crypto_details"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/crypto_details",(req,res) => {
    const q ="insert into crypto_details(`title`,`description`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("succesfully");
    })
})




app.listen(8800, ()=>{
    console.log("Backend server is running!")
})