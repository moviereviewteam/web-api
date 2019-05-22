export default class ValidateError extends Error {
  constructor(error) {
    super(error.message);
    this.name = this.constructor.name;
    this.status = 400;
  }
}
