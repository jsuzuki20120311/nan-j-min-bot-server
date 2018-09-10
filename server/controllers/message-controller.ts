import { Request, Response, NextFunction } from 'express';
import { NanJMinBotService } from '../services/nan-j-min-bot-service';


export class MessageController {

  async doPost(req: Request, res: Response, next: NextFunction) {
    const service = new NanJMinBotService();
    try {
      await service.postMessage(req.body);
      res.send({ message: 'ok' });
    } catch(error) {
      next({ stats: 500, message: 'server error.' });      
    }
  }

}
