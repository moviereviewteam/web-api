export default class ResourceNotFoundError extends Error {
    constructor(entityType = 'entity') {
      super();
      this.name = this.constructor.name;
      this.status = 404;
      this.message = `${entityType} does not exist!`;
    }
  }