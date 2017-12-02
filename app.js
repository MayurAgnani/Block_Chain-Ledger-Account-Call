/**
 * Created by magnani on 11/29/17.
 */
const express = require('express')
const app = express();
const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545');


let test={
    firstName:"Mayur",
    lastName:"Agnani",
}
app.get('/',(req,res) => {
    res.sendFile(__dirname +'/public/index.html')
})

app.get('/ajax-request',(req,res) => {
    web3.eth.getAccounts(function (err,address) {
    if(err==null) {
        res.send(JSON.stringify(address))
    }
})


})

app.listen(3013);





