const express=require('express');
const app=express();
const cors=require('cors')
require('dotenv').config();
const connectDb=require('./config/db')
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')

const PORT=process.env.PORT||5000

app.use(cors())
app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)

connectDb();
app.get("/",(req,res)=>{
  res.send("Server created");
})

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
})