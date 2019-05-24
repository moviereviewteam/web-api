import express from 'express';
import { 
  getAllCommentsByArticleId,
  getAllLv2CommentsByParentId,
} from '../services/commentService';

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
    getAllCommentsByArticleId: express.Router().use(modelHandler(getAllCommentsByArticleId)),
    getAllLv2CommentsByParentId: express.Router().use(modelHandler(getAllLv2CommentsByParentId)),
}[name];
}