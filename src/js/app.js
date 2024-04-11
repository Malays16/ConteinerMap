export class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, 'Resource not found'],
      [500, 'An error has occurred on the server'],
      [400, 'Bad request'],
      [401, 'Unauthorized'],
      [403, 'Forbidden'],
      [429, 'Too many requests']
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}

const errorRepository = new ErrorRepository();
console.log(errorRepository.translate(400));