const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database/');




const app = express();
const PORT = 3333;

app.use(cors())
app.use(express.json())
app.use(routes);


//inicando  oserver
app.listen(PORT, function() {
    console.log('Server on 3333')
})

// conexão com o banco
