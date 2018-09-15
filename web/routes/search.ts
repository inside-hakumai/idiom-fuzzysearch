import {Request, Response, NextFunction} from "express";
import * as express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req:Request, res:Response, next:NextFunction) {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({'hoge': 'huga'});
});

module.exports = router;
