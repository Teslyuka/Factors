const pthFactor = require('./solution');

test('4th factor of n=4', () => {
  const expected = 0;
  const actual = pthFactor(4, 4);

  expect(actual).toEqual(expected);
});

test('2nd factor of n=1234', () => {
  const expected = 2;
  const actual = pthFactor(1234, 2);

  expect(actual).toEqual(expected);
});

test('1st factor of n=111111', () => {
  const expected = 1;
  const actual = pthFactor(111111, 1);

  expect(actual).toEqual(expected);
});

test('12th factor of n=1048576', () => {
  const expected = 2048;
  const actual = pthFactor(1048576, 12);

  expect(actual).toEqual(expected);
});

test('2nd factor of n=67280421310721', () => {
  const expected = 67280421310721;
  const actual = pthFactor(67280421310721, 2);

  expect(actual).toEqual(expected);
});

test('28th factor of n=22876792454961', () => {
  const expected = 7625597484987;
  const actual = pthFactor(22876792454961, 28);

  expect(actual).toEqual(expected);
});

test('26881th factor of n=866421317361600', () => {
  const expected = 0;
  const actual = pthFactor(866421317361600, 26881);

  expect(actual).toEqual(expected);
});

test('26880th factor of n=866421317361600', () => {
  const expected = 866421317361600;
  const actual = pthFactor(866421317361600, 26880);

  expect(actual).toEqual(expected);
});

test('56th factor of n=99980000016', () => {
  const expected = 438508772;
  const actual = pthFactor(99980000016, 56);

  expect(actual).toEqual(expected);
});

test('200th factor of n=100000000000000', () => {
  const expected = 160000000000;
  const actual = pthFactor(100000000000000, 200);

  expect(actual).toEqual(expected);
});