import ErrorRepository from '../js/ErrorRepository';

test('translate known error code', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(404)).toBe('Not Found');
});

test('translate unknown error code', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(700)).toBe('Unknown error');
});
