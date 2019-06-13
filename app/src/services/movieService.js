import models from '../../db/models';
import { ValidateError } from '../errors';
import { getAllActorsByMovieId } from './actorService';
import { getAllGenresByMovieId } from './genreService';
import { getAllArticlesByMovieId } from './articleService';
import { getAllReviewsByMovieId } from './reviewService';

const moment = require('moment');

export async function getAll(body) {
    try {
        const result = [];
        let index = 0;

        const movieList = await models.Movie.findAll();

        for (const item of movieList) {
        result.push({
            index: index += 1,
            id: item.id,
            nameVi: item.nameVi,
            nameEn: item.nameEn
        });
        }

        return result;
    }
    catch (error) {
        throw error;
    }
}

export async function getMovieById(body) {
    try {
        const { id } = body.query;
        if (!id) {
            throw new ValidateError({
                message: "Param \'id\' is required."
            });
        }
        else {
            const movie = await models.Movie.findOne({
                include: [
                    {
                        model: models.Universe,
                    }
                ],
                where: {
                    id
                }
            });
            const actors = await getAllActorsByMovieId({
                query: {
                    movieId: id
                }
            });
            const genres = await getAllGenresByMovieId({
                query: {
                    movieId: id
                }
            });
            const articles = await getAllArticlesByMovieId({
                query: {
                    movieId: id
                }
            });
            const reviews = await getAllReviewsByMovieId({
                query: {
                    movieId: id
                }
            });
            const result = {
                id: movie.id,
                image: movie.image,
                trailer: movie.trailer,
                nameVi: movie.nameVi,
                nameEn: movie.nameEn,
                score: reviews.averageScore,
                overView: movie.overView,
                premiereDate: movie.premiereDate,
                duration: movie.duration,
                ageLimit: movie.ageLimit,
                director: movie.director,
                producer: movie.producer,
                universe: movie.universeId ? movie.Universe.name : null,
                actors,
                genres,
                reviews: reviews.reviewList,
                articles
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getAllMoviesByActorId(body) {
    try {
        const { actorId } = body.query;
        if (!actorId) {
            throw new ValidateError({
                message: "Param \'actorId\' is required."
            });
        }
        else {
            const moviesList = await models.MovieActor.findAll({
                include: [
                    {
                        model: models.Movie,
                    }
                ],
                where: {
                    actorId
                }
            });
            const result = [];
            for (const movie of moviesList) {
                result.push({
                    id: movie.movieId,
                    image: movie.Movie.image,
                    name: movie.Movie.nameVi,
                    premiereDate: movie.Movie.premiereDate
                });
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getAllMoviesByGenreId(body) {
    try {
        const { genreId } = body.query;
        if (!genreId) {
            throw new ValidateError({
                message: "Param \'genreId\' is required."
            });
        }
        else {
            const moviesList = await models.MovieGenre.findAll({
                include: [
                    {
                        model: models.Movie,
                    }
                ],
                where: {
                    genreId
                }
            });
            const result = [];
            for (const movie of moviesList) {
                result.push({
                    id: movie.movieId,
                    image: movie.Movie.image,
                    name: movie.Movie.nameVi,
                    premiereDate: movie.Movie.premiereDate
                });
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getAllMoviesByUniverseId(body) {
    try {
        const { universeId } = body.query;
        if (!universeId) {
            throw new ValidateError({
                message: "Param \'universeId\' is required."
            });
        }
        else {
            const movieList = await models.Movie.findAll({
                where: {
                    universeId
                }
            });
            return movieList;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getFavoriteListByUserId(body) {
    try {
        const { userId } = body.query;
        if (!userId) {
            throw new ValidateError({
                message: "Param \'userId\' is required."
            });
        }
        else {
            const movieList = await models.FavoriteList.findAll({
                include: [
                    {
                        model: models.Movie
                    }
                ],
                where: {
                    userId
                }
            });
            const result = [];
            for (const movie of movieList) {
                result.push({
                    id: movie.movieId,
                    image: movie.Movie.image,
                    name: movie.Movie.nameVi,
                    premiereDate: movie.Movie.premiereDate
                });
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function addToFavoriteList(body) {
    try {
        const { userId, movieId } = body.params;

        if (!userId || !movieId) {
            throw new ValidateError({
                message: "Please check the required fields"
            });
        }
        else {
            const item = {
                userId,
                movieId,
                createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
                updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            }

            const result = await models.FavoriteList.create(item);
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function removeFromFavoriteList(body) {
    try {
        const { userId, movieId } = body.params;

        if (!userId || !movieId) {
            throw new ValidateError({
                message: "Please check the required fields"
            });
        }
        else {
            const item = await models.FavoriteList.findOne({
                where: {
                    userId,
                    movieId
                }
            })

            const result = await models.FavoriteList.destroy({
                where: {
                    id: item.id
                }
            });
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}