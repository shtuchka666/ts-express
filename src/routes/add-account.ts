import { Request, Response, Router  } from 'express';
const addAccount =Router();
import {autorization} from '../services/autorization.js';
import {Autorization} from '../libdef.js';

//Добавляет новые свободные номера в json-файл freeNumberPhones в бакете
addAccount.get('/:numberPhones', async (req: Request, res: Response) => {
    console.log('START get /add');
    const checkAutorization: Autorization = autorization(req.headers.token);
    if (checkAutorization.code != 1){
        console.log(checkAutorization.msg);
        res.json({result: 'fail', code: 403, message: checkAutorization.msg});
        return;
    }
    console.log(checkAutorization.msg);
    const {numberPhones} = req.params;
    console.log('numberPhones: ' + numberPhones);
    console.log('END get /add');
    return res.json({result: 'ok', code: 200, message: 'Добавили приложение'});
})

export default addAccount;