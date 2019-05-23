import models from '../../db/models';
import { ValidateError } from '../errors';

export async function getArticleById(body) {
    try {
        const { id } = body.query;
        if (!id) {
            throw new ValidateError({
                message: "Param \'id\' is required."
            });
        }
        else {
            const article = await models.ReviewArticle.findOne({
                include: [
                    {
                        model: models.User
                    }
                ],
                where: {
                    id
                }
            });
            const result = {
                id: article.id,
                title: article.title,
                content: article.content,
                like: article.like,
                dislike: article.dislike,
                user: article.User.name,
                createdAt: article.createdAt,
                updatedAt: article.updatedAt
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getAllArticlesByMovieId(body) {
    try {
        const { movieId } = body.query;
        if (!movieId) {
            throw new ValidateError({
                message: "Param \'movieId\' is required."
            });
        }
        else {
            const articles = await models.ReviewArticle.findAll({
                where: {
                    movieId
                }
            });
            return articles;
        }
    }
    catch (error) {
        throw error;
    }
}