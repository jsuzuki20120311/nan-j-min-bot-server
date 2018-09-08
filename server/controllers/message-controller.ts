import { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import * as sqlite3 from 'sqlite3';
import { AppData } from '../models/app-data';
import { AppError } from '../models/app-error';
import { Message } from "../models/message";

export class MessageController {

  getMessage(req: Request, res: Response, next: NextFunction) {
    console.log("get message");
    res.send({ message: 'ok' });
  }

  postMessage(req: Request, res: Response, next: NextFunction) {
    console.log("post message");
    res.send({ message: 'ok' });
  }

  putMessage(req: Request, res: Response, next: NextFunction) {
    console.log("put message");
    res.send({ message: 'ok' });
  }
}
