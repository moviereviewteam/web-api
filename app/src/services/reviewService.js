import models from '../../db/models';
import { ValidateError } from '../errors';

export async function getAllReviewsByMovieId(body) {
    try {
        const { movieId } = body.query;
        if (!movieId) {
            throw new ValidateError({
                message: "Param \'movieId\' is required."
            });
        }
        else {
            const reviews = await models.Review.findAll({
                include: [
                    {
                        model: models.User
                    }
                ],
                where: {
                    movieId
                }
            });
            const result = [];
            for (const review of reviews) {
                result.push({
                    id: review.id,
                    score: review.score,
                    content: review.content,
                    like: review.like,
                    dislike: review.dislike,
                    user: review.User.name 
                });
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}