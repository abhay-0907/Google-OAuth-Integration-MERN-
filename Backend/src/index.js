import 'dotenv/config'
import express from 'express'
import cors from 'cors';
import authRoute from './routes/auth.route.js'
import dbConnection from './config/db.connection.js'; 





const app = express()
const PORT = process.env.PORT || 5000

app.use(cors(
    {
        origin:'*'
    }
))
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/api',authRoute)


const start =  async ()=>{
    try {

        await dbConnection()
        app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();