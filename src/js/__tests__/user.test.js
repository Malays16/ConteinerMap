import { ErrorRepository } from '../app';

const errorRepository = new ErrorRepository();

describe('ErrorRepository', () => {
  test('should return Unknown error', () => {
    expect(errorRepository.translate(0)).toBe('Unknown error');
  });

  test('should return text error', () => {
    expect(errorRepository.translate(404)).toBe('Resource not found');
  });
});