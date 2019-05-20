import models from '../../db/models';

export async function getMovieById(body) {
    try {
        const { id } = body.query;
        if (!id) {
            console.log('Param "id" is required.');
        }
        const movie = await models.Movie.findOne({
            where: {
                id
            }
        });
        return movie;
    }
    catch (error) {
        throw error;
    }
}