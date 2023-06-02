import * as dotenv from 'dotenv'
dotenv.config();
import {Autorization} from '../libdef.js';

export function autorization(token: string | string[] | undefined): Autorization {
    if (!token) {
      return {code: 0, msg: 'Отсутствует токен'};
    }
    if (token != process.env.TOKEN) {
      return {code: -1, msg: 'Неверный токен'};
    }
    return {code: 1, msg: 'Прошли авторизацию'};
}