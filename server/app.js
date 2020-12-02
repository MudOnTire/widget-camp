const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express()

const port = 3000;

app.use(cors());

app.get('/importmap.json', (req, res) => {
  res.json({
    imports: {
      '@wc/bar-chart': 'http://localhost:3000/apps/bar-chart/wc-bar-chart.js',
      '@wc/pie-chart': 'http://localhost:3000/apps/pie-chart/wc-pie-chart.js',
    }
  });
});

app.use('/apps', express.static(path.resolve(__dirname, './apps')));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})