import models from '../../db/models';
import { ValidateError } from '../errors';
import { getAllMoviesByGenreId } from './movieService';

export async function getGenreById(body) {
    try {
        const { id } = body.query;
        if (!id) {
            throw new ValidateError({
                message: "Param \'id\' is required."
            });
        }
        else {
            const genre = await models.Genre.findOne({
                where: {
                    id
                }
            });
            const movieList = await getAllMoviesByGenreId({
                query: {
                    genreId: id
                }
            });
            const result = {
                id: genre.id,
                name: genre.name,
                movies: movieList
            };
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getAllGenresByMovieId(body) {
    try {
        const { movieId } = body.query;
        if (!movieId) {
            throw new ValidateError({
                message: "Param \'movieId\' is required."
            });
        }
        else {
            const genres = await models.MovieGenre.findAll({
                include: [
                    {
                        model: models.Genre
                    }
                ],
                where: {
                    movieId
                }
            });
            const result = [];
            for (const genre of genres) {
                result.push({
                    id: genre.genreId,
                    name: genre.Genre.name,
                });
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}