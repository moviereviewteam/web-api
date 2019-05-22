import express from 'express';
import { 
  getMovieById, 
  getAllMoviesByActorId,
  getAllMoviesByGenreId
} from '../services/movieService';

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
    getMovieById: express.Router().use(modelHandler(getMovieById)),
    getAllMoviesByActorId: express.Router().use(modelHandler(getAllMoviesByActorId)),
    getAllMoviesByGenreId: express.Router().use(modelHandler(getAllMoviesByGenreId)),
}[name];
}