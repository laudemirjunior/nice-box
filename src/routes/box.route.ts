import { Router } from 'express';
import { createBoxController } from '../controllers';
import { getBoxControler } from '../controllers';
import {
  validateAdminMiddleware,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { boxModel } from '../models';

const boxRoute = Router();

boxRoute.post(
  '/box',
  validateModelMiddleware(boxModel),
  validateTokenMiddleware,
  validateAdminMiddleware,
  createBoxController
);

boxRoute.get('/box?', getBoxControler);

export { boxRoute };
