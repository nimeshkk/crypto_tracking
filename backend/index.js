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

app.use(express.json());
app.use(cors());
app.use(express.json());

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
    });
})


app.delete("/crypto_details/:id", (req, res) => {
    const detailId = req.params.id;
    const q = "DELETE FROM crypto_details WHERE id = ?";

    db.query(q,[detailId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been delete successfully");
    })
})

app.put("/crypto_details/:id", (req, res) => {
    const detailId = req.params.id;
    const q = "UPDATE crypto_details SET `title` = ?, `description` = ? WHERE id = ?";

    const values=[
        req.body.title,
        req.body.description,
    ]

    db.query(q,[...values,detailId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been update successfully");
    })
})

// signup

app.post("/signup",(req,res)=> {
    const q = "insert into crypto_signup(`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("succesfully");
    });


})

// login

app.post("/login",(req,res)=> {
    const q = "SELECT * FROM crypto_signup WHERE `email` = ? AND `password` = ? ";
   
    db.query(q, [req.body.email, req.body.password], (err,data) => {
        if(err){ 
            return res.json(err);
        }
        if(data.length > 0){
            return res.json("success");
        }
        else{
            return res.json("faile");
        }
        
    })
})

app.listen(8800, ()=>{
    console.log("Backend server is running!")
})