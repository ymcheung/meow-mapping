import { expect, test } from 'vitest';
import formatDuration from '@helpers/formatDuration';

const expectMinutesRsult = {
  duration: 10,
  unit: 'minutes'
};

const expectHourRsult = {
  duration: 1,
  unit: 'hour'
};

test('Expect to get minutes', async () => {
  const minutesResult = formatDuration(10);
  const hourResult = formatDuration(60);

  expect(minutesResult).toEqual(expectMinutesRsult);
});

test('Expect to get hour', async () => {
  const hourResult = formatDuration(60);

  expect(hourResult).toEqual(expectHourRsult);
});
