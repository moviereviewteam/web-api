import express from 'express';
import { 
  getActorById, 
  getAllActorsByMovieId,
  getAll,
} from '../services/actorService';

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
    getActorById: express.Router().use(modelHandler(getActorById)),
    getAllActorsByMovieId: express.Router().use(modelHandler(getAllActorsByMovieId)),
    getAll: express.Router().use(modelHandler(getAll)),
}[name];
}