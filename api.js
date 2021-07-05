const express = require('express')
const app = express()
const xlsx = require('xlsx');
const cors = require('cors')
app.use(cors())
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
 
app.get('/getServices',cors(corsOptions), function (req, res) {
  
    var wb = xlsx.readFile('database.xlsx');
    var ws = wb.Sheets[wb.SheetNames[0]]; 
    let data = xlsx.utils.sheet_to_json(ws) 
    res.send(data)
})
 
app.listen(process.env.PORT || 3000,()=>console.log("Running Server..."))