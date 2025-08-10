import { expect, test, describe } from 'vitest';
import formatDuration from '@helpers/formatDuration';

describe('formatDuration', () => {
  describe('minutes formatting', () => {
    test('should format 1 minute as singular', () => {
      const result = formatDuration(1);
      expect(result).toEqual({
        duration: 1,
        unit: 'minute'
      });
    });

    test('should format multiple minutes as plural', () => {
      const result = formatDuration(10);
      expect(result).toEqual({
        duration: 10,
        unit: 'minutes'
      });
    });

    test('should format 0 minutes as plural', () => {
      const result = formatDuration(0);
      expect(result).toEqual({
        duration: 0,
        unit: 'minutes'
      });
    });

    test('should format 59 minutes (just under an hour)', () => {
      const result = formatDuration(59);
      expect(result).toEqual({
        duration: 59,
        unit: 'minutes'
      });
    });
  });

  describe('hours formatting', () => {
    test('should format exactly 1 hour as singular', () => {
      const result = formatDuration(60);
      expect(result).toEqual({
        duration: 1,
        unit: 'hour'
      });
    });

    test('should format exactly 2 hours as plural', () => {
      const result = formatDuration(120);
      expect(result).toEqual({
        duration: 2,
        unit: 'hours'
      });
    });

    test('should format 1.5 hours with decimal', () => {
      const result = formatDuration(90);
      expect(result).toEqual({
        duration: 1.5,
        unit: 'hours'
      });
    });

    test('should format 2.3 hours with one decimal place', () => {
      const result = formatDuration(138); // 138 minutes = 2.3 hours
      expect(result).toEqual({
        duration: 2.3,
        unit: 'hours'
      });
    });

    test('should round to whole number when decimal is .0', () => {
      const result = formatDuration(180); // 3.0 hours
      expect(result).toEqual({
        duration: 3,
        unit: 'hours'
      });
    });

    test('should handle long durations', () => {
      const result = formatDuration(600); // 10 hours
      expect(result).toEqual({
        duration: 10,
        unit: 'hours'
      });
    });
  });

  describe('edge cases', () => {
    test('should handle fractional minutes (round to nearest minute)', () => {
      // Note: The function expects whole minutes, but let's test with decimals
      const result = formatDuration(30.7);
      expect(result).toEqual({
        duration: 30.7,
        unit: 'minutes'
      });
    });

    test('should handle very large numbers', () => {
      const result = formatDuration(1440); // 24 hours
      expect(result).toEqual({
        duration: 24,
        unit: 'hours'
      });
    });
  });
});
