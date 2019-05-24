import models from '../../db/models';
import { ValidateError } from '../errors';

export async function getUserById(body) {
    try {
        const { id } = body.query;
        if (!id) {
            throw new ValidateError({
                message: "Param \'id\' is required."
            });
        }
        else {
            const user = await models.User.findOne({
                where: {
                    id,
                    roleId: 2,
                }
            });
            return user;
        }
    }
    catch (error) {
        throw error;
    }
}