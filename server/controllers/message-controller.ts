import { Request, Response, NextFunction } from 'express';
import { NanJMinBotService } from '../services/nan-j-min-bot-service';
import * as rp from 'request-promise';


export class MessageController {


  async doPost(req: Request, res: Response, next: NextFunction) {
    try {
      res.send({ message: 'ok' });
      const service = new NanJMinBotService();
      const message = await service.createMessage(req.body);
      rp({
        uri: req.body.receiveEndpoint,
        method: 'post',
        json: {
          value: '>> ' + req.body.text.slice(req.body.trigger_word.length) + '\n' + message,
          type: 0,
          author: 'bot'
        }
      });
    } catch(error) {
      console.error(error);
      next({ stats: 500, message: 'server error.' });
    }
  }
}
