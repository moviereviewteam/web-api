import models from '../../db/models';
import { ValidateError } from '../errors';
import { getAllActorsByMovieId } from './actorService';

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
                where: {
                    id
                }
            });
            const actors = await getAllActorsByMovieId({
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
                overView: movie.overView,
                premiereDate: movie.premiereDate,
                duration: movie.duration,
                ageLimit: movie.ageLimit,
                director: movie.director,
                producer: movie.producer,
                universeId: movie.universeId,
                isVietnameseMovie: movie.isVietnameseMovie,
                actors
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