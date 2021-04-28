const express = require('express');
const server = express();


server.get ('/', (req, res) => {
    return res.send('Você está no barra')
})
    
//INICIAR O SERVIDOR
    server.listen(process.env.PORT || 3000)