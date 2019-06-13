import express from 'express';
import { 
  getArticleById, 
  getAllArticlesByMovieId,
  getAll,
} from '../services/articleService';

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
    getArticleById: express.Router().use(modelHandler(getArticleById)),
    getAllArticlesByMovieId: express.Router().use(modelHandler(getAllArticlesByMovieId)),
    getAll: express.Router().use(modelHandler(getAll)),
}[name];
}