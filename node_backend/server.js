const express = require('express');
const { rmSync } = require('fs');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

let port = 8081;

app.get('/', (req, res, next) => {
  res.status(200).send('Congratulations! We are running node HTTP server!');
});

app.post('/api/countletters', (req, res) => {
  function countletters(paragraph) {
    return paragraph.length;
  }

  const paragraph = req.body?.paragraph;

  // Count letters in the paragraph
  const letterCount = countletters(paragraph);

  res.status(200).json({
    success: true,
    value: `${letterCount}`,
  });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})