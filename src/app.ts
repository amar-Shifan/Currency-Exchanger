import express from 'express';
import dotenv from 'dotenv';
import currencyRoute from './routes/currencyRoute';
import path from 'path'


dotenv.config()
const app = express();

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

app.use('/' , currencyRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));