require('dotenv').config()
import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routes/product.routes'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',productRouter)


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoose');
});

app.listen(process.env.PORT,()=>{
    console.log('connected to server');
})