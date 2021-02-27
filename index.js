const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('success');
});

app.listen(process.env.PORT || 4000,()=>{ 
    console.log('listening at 4000');
})



