import models from '../../db/models';
import { ValidateError } from '../errors';

const moment = require('moment');

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
            const reviewList = [];
            let average = 0;
            let n = 0;
            for (const review of reviews) {
                reviewList.push({
                    id: review.id,
                    score: review.score,
                    content: review.content,
                    like: review.like,
                    dislike: review.dislike,
                    user: review.User.name 
                });
                average += review.score;
                n += 1;
            }
            const result = {
                averageScore: average/n,
                reviewList
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function addReview(body) {
    try {
        const { userId, movieId, score, content } = body.params;

        if (!userId || !movieId || !score) {
            throw new ValidateError({
                message: "Please check the required fields"
            });
        }
        else {
            const review = {
                userId,
                movieId,
                score,
                content,
                like: 0,
                dislike: 0,
                createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
                updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            }

            const result = await models.Review.create(review);
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}