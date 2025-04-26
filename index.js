const express = require('express');

const app = express();



// Respond with "Hello World" when a GET request is made to the root "/"

app.get('/', (req, res) => {

  res.send('welcome to my App');
const PORT = process.env.PORT || 3000; app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`);

});
module.exports=app;
