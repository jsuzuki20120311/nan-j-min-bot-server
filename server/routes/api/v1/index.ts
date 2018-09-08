import * as express from 'express';
import message from './message';

const v1 = express.Router();
v1.use('/message', message);

export default v1;
