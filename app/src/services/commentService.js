import models from '../../db/models';
import { ValidateError, ResourceNotFoundError } from '../errors';
import _ from 'lodash';

const moment = require('moment');

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

export async function addComment(body) {
    try {
        const { userId, reviewArticleId, parentId, content } = body.params;

        if (!userId || !reviewArticleId || !content) {
            throw new ValidateError({
                message: "Please check the required fields"
            });
        }
        else {
            const comment = {
                userId,
                reviewArticleId,
                content,
                like: 0,
                dislike: 0,
                createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
                updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            }

            if (parentId) _.assign(comment, { parentId });

            const result = await models.Comment.create(comment);
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function updateComment(body) {
    try {
        const { id, content } = body.params;

        if (!id || !content) {
            throw new ValidateError({
                message: "Please check the required fields"
            });
        }
        else {
            const result = await models.Comment.findOne({
                where: {
                    id
                }
            }).then ((comment) => {
                if (!comment) {
                    throw new ResourceNotFoundError('Comment');
                }
                return comment.update({
                    content,
                    updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
                })
            })

            return result;
        }
    }
    catch (error) {
        throw error;
    }
}

export async function removeComment(body) {
    try {
        const { id } = body.params;

        if (!id) {
            throw new ValidateError({
                message: "Param \'id\' is required."
            });
        }
        else {
            const comment = await models.Comment.findOne({
                where: {
                    id
                }
            })

            if (!comment) {
                throw new ResourceNotFoundError('Comment');
            }

            const result = await models.sequelize.transaction(t => models.Comment.destroy({
                where: {
                    parentId: id
                } 
            },
            {
                transaction: t
            }).then(() => models.Comment.destroy({
                where: {
                    id
                }
            },
            {
                transaction: t
            })));
            return result;
        }
    }
    catch (error) {
        throw error;
    }
}