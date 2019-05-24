import models from '../../db/models';
import { ValidateError } from '../errors';

export async function getAllLv2CommentsByParentId(body) {
    try {
        const { parentId } = body.query;
        if (!parentId) {
            throw new ValidateError({
                message: "Param \'parentId\' is required."
            });
        }
        else {
            const commentsLevel2 = await models.Comment.findAll({
                include: [
                    {
                        model: models.User
                    }
                ],
                order: [
                    ['createdAt', 'ASC']
                ],
                where: {
                    parentId
                }
            });
            const result = [];
            for (const comment of commentsLevel2) {
                result.push({
                    id: comment.id,
                    content: comment.content,
                    like: comment.like,
                    dislike: comment.dislike,
                    user: comment.User.name,
                    createdAt: comment.createdAt,
                    updatedAt: comment.updatedAt
                })
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function getAllCommentsByArticleId(body) {
    try {
        const { reviewArticleId } = body.query;
        if (!reviewArticleId) {
            throw new ValidateError({
                message: "Param \'reviewArticleId\' is required."
            });
        }
        else {
            const commentsLevel1 = await models.Comment.findAll({
                include: [
                    {
                        model: models.User
                    }
                ],
                order: [
                    ['createdAt', 'ASC']
                ],
                where: {
                    reviewArticleId,
                    parentId: null
                }
            });
            const result = [];
            for (const comment of commentsLevel1) {
                result.push({
                    id: comment.id,
                    content: comment.content,
                    like: comment.like,
                    dislike: comment.dislike,
                    user: comment.User.name,
                    createdAt: comment.createdAt,
                    updatedAt: comment.updatedAt,
                    child: await getAllLv2CommentsByParentId({
                        query: {
                            parentId: comment.id
                        }
                    })
                    
                })
            }
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}