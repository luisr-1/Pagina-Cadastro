const express = require('express')
const app = express()

const port = 3000;

app.get('/hello', (req, res) =>{
  res.send('Hello World');
});

app.post('/fodeu', function(req, res){
  res.send('Vai se foder');
});

app.listen(port, () => {
  console.info(`A aplicação está rodando em http://localhost:${port}`)

});
