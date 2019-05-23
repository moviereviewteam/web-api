import models from '../../db/models';
import { ValidateError } from '../errors';
import { getAllMoviesByActorId } from './movieService'

export async function getActorById(body) {
    try {
        const { id } = body.query;
        if (!id) {
            throw new ValidateError({
                message: "Param \'id\' is required."
            });
        }
        else {
            const actor = await models.Actor.findOne({
                where: {
                    id
                }
            });
            const movieList = await getAllMoviesByActorId({
                query: {
                    actorId: id
                }
            });
            const result = {
                id: actor.id,
                image: actor.image,
                name: actor.name,
                dateOfBirth: actor.dateOfBirth,
                placeOfBirth: actor.placeOfBirth,
                description: actor.description,
                movies: movieList
            };
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getAllActorsByMovieId(body) {
    try {
        const { movieId } = body.query;
        if (!movieId) {
            throw new ValidateError({
                message: "Param \'movieId\' is required."
            });
        }
        else {
            const actors = await models.MovieActor.findAll({
                include: [
                    {
                        model: models.Actor
                    }
                ],
                where: {
                    movieId
                }
            });
            const result = [];
            for (const actor of actors) {
                result.push({
                    id: actor.actorId,
                    image: actor.Actor.image,
                    name: actor.Actor.name,
                });
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}