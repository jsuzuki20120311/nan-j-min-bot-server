import * as express from 'express';
import { MessageController } from '../../../controllers/message-controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'ok' });
});

router.post('/', (req, res, next) => {
  const messageController = new MessageController();
  messageController.doPost(req, res, next);
});

export default router;
