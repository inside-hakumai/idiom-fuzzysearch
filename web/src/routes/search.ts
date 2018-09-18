import idiomDB, {ResultEntity} from './../server/database';
import {Request, Response, NextFunction} from "express";
import * as express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req:Request, res:Response, next:NextFunction) {

  res.header('Content-Type', 'application/json; charset=utf-8');

  const searchResult: ResultEntity[] = idiomDB.fuzzySearch(req.query.query);

  searchResult.sort((search1:ResultEntity, search2:ResultEntity) => {
    return search1.distance - search2.distance
  });

  res.json(searchResult);
});

module.exports = router;
