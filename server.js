import express from 'express';
import cors from 'cors';
import router from './routes/dialogRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(8000, () => {
    console.log('🚀 Server ready')
});