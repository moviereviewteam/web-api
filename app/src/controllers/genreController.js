import express from 'express';
import { 
  getGenreById, 
  getAllGenresByMovieId,
} from '../services/genreService';

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
    getGenreById: express.Router().use(modelHandler(getGenreById)),
    getAllGenresByMovieId: express.Router().use(modelHandler(getAllGenresByMovieId)),
}[name];
}