import models from '../../db/models';
import { ValidateError } from '../errors';

export async function getAll(body) {
    try {
        const result = [];
        let index = 0;

        const universeList = await models.Universe.findAll();

        for (const item of universeList) {
        result.push({
            index: index += 1,
            id: item.id,
            name: item.name,
            description: item.description
        });
        }

        return result;
    }
    catch (error) {
        throw error;
    }
}