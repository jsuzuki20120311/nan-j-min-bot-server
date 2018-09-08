import * as express from 'express';
import { MessageController } from '../../../controllers/message-controller';

const message = express.Router();

message.get('/', (req, res, next) => {
  const messageController = new MessageController();
  messageController.getMessage(req, res, next);
});

message.post('/', (req, res, next) => {
  const messageController = new MessageController();
  messageController.postMessage(req, res, next);
});

message.put('/', (req, res, next) => {
  const messageController = new MessageController();
  messageController.putMessage(req, res, next);
});

export default message;
