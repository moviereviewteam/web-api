import express from 'express';
import { 
  getAll,
} from '../services/universeService';

function modelHandler(modelFunc) {
    return async (req, res, next) => {
      try {
        res.data = await modelFunc({
          params: req.body, query: req.query, data: req.data, file: req.file
        });
        next();
      } catch (e) {
        next(e);
      }
    };
  }
  
export default function (name) {
return {
    getAll: express.Router().use(modelHandler(getAll)),
}[name];
}