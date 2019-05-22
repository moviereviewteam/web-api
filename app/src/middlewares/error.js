import Sequelize from 'sequelize';
import {
  BusinessError,
  ValidationError
} from '../errors/errors';

export default (err, req, res, next) => {
  let formatedError = err;
  if (err instanceof Sequelize.ValidationError) {
    formatedError = new ValidationError(err);
  } else if (err instanceof BusinessError) {
    formatedError = err;
  }
  formatedError = err;
  const { name, status, message } = formatedError;

  res.status(status || 500).json({
    name,
    message
  });

  next();
};
