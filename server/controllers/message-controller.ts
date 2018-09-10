import { Request, Response, NextFunction } from 'express';
import { NanJMinBotService } from '../services/nan-j-min-bot-service';


export class MessageController {

  doPost(req: Request, res: Response, next: NextFunction) {
    const service = new NanJMinBotService();
    service.postMessage(req.body);
    res.send({ message: 'ok' });
  }

}
