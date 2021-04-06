require('./db_con');
const express = require('express');
const course_router = require('./router/courses')
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/courses', course_router);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));



