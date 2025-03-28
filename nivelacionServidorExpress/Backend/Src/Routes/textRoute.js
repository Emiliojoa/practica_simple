import { Router } from 'express';
import { sendText, getText } from '../Controllers/textControllers.js';
export const textRouter = Router()

textRouter.post('/enviar', sendText);
textRouter.get('/textos', getText);

