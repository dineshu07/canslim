
var cp = require('child_process');
const express = require('express');
const { rmSync } = require('fs');
const app = express()
const port = 3000

app.get('/getScripts', (req, res) => {
    cp.exec('bash ./script.sh', function(err, stdout, stderr) {
        res.send(stdout);
    });
});
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
