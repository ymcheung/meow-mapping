import { expect, test, describe, beforeEach, afterEach, vi } from 'vitest';
import siteUrl from '@helpers/siteUrl';

describe('siteUrl', () => {
  // Store original environment variables to restore after tests
  let originalProcessEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalProcessEnv = { ...process.env };
  });

  afterEach(() => {
    process.env = originalProcessEnv;
    vi.unstubAllEnvs();
  });

  describe('input validation', () => {
    test('should return empty string for non-string input', () => {
      expect(siteUrl(null as any)).toBe('');
      expect(siteUrl(undefined as any)).toBe('');
      expect(siteUrl(123 as any)).toBe('');
      expect(siteUrl({} as any)).toBe('');
      expect(siteUrl([] as any)).toBe('');
    });

    test('should handle empty string pathname', () => {
      const result = siteUrl('');
      expect(typeof result).toBe('string');
    });
  });

  // describe('development environment', () => {
  //   beforeEach(() => {
  //     vi.stubEnv('DEV', true);
  //     vi.stubEnv('SITE_URL', 'http://localhost:4321');
  //     vi.stubEnv('SITE', 'https://mapping.meow.ymcheung.tw');
  //   });

  //   test('should use preview deploy URL when available in development', () => {
  //     process.env.RENDER_EXTERNAL_URL = 'preview-abc123.onrender.com';

  //     const result = siteUrl('/about');
  //     expect(result).toBe('https://preview-abc123.onrender.com/about');
  //   });

  //   test('should use SITE_URL when no preview deploy URL in development', () => {
  //     delete process.env.RENDER_EXTERNAL_URL;

  //     const result = siteUrl('/contact');
  //     expect(result).toBe('http://localhost:4321/contact');
  //   });

  //   test('should handle root path in development', () => {
  //     delete process.env.RENDER_EXTERNAL_URL;

  //     const result = siteUrl('/');
  //     expect(result).toBe('http://localhost:4321/');
  //   });

  //   test('should handle paths without leading slash in development', () => {
  //     delete process.env.RENDER_EXTERNAL_URL;

  //     const result = siteUrl('blog/post-1');
  //     expect(result).toBe('http://localhost:4321blog/post-1');
  //   });
  // });

  describe('production environment', () => {
    beforeEach(() => {
      vi.stubEnv('DEV', false);
      vi.stubEnv('SITE', 'https://mapping.meow.ymcheung.tw');
    });

    test('should use SITE URL in production', () => {
      const result = siteUrl('/islands/tashirojima');
      expect(result).toBe(
        'https://mapping.meow.ymcheung.tw/islands/tashirojima'
      );
    });

    test('should handle root path in production', () => {
      const result = siteUrl('/');
      expect(result).toBe('https://mapping.meow.ymcheung.tw/');
    });

    test('should handle complex paths in production', () => {
      const result = siteUrl('/temples/gotokuji?tab=cats&filter=friendly');
      expect(result).toBe(
        'https://mapping.meow.ymcheung.tw/temples/gotokuji?tab=cats&filter=friendly'
      );
    });

    test('should ignore preview deploy URL in production', () => {
      process.env.RENDER_EXTERNAL_URL = 'preview-abc123.onrender.com';

      const result = siteUrl('/neighborhoods/yanaka');
      expect(result).toBe(
        'https://mapping.meow.ymcheung.tw/neighborhoods/yanaka'
      );
    });
  });

  describe('real-world usage scenarios', () => {
    beforeEach(() => {
      vi.stubEnv('DEV', false);
      vi.stubEnv('SITE', 'https://mapping.meow.ymcheung.tw');
    });

    test('should handle typical cat spotting guide paths', () => {
      expect(siteUrl('/islands')).toBe(
        'https://mapping.meow.ymcheung.tw/islands'
      );
      expect(siteUrl('/temples')).toBe(
        'https://mapping.meow.ymcheung.tw/temples'
      );
      expect(siteUrl('/neighborhoods')).toBe(
        'https://mapping.meow.ymcheung.tw/neighborhoods'
      );
      expect(siteUrl('/islands/tashirojima')).toBe(
        'https://mapping.meow.ymcheung.tw/islands/tashirojima'
      );
      expect(siteUrl('/temples/gotokuji')).toBe(
        'https://mapping.meow.ymcheung.tw/temples/gotokuji'
      );
    });

    test('should handle paths with special characters', () => {
      expect(siteUrl('/島/猫')).toBe('https://mapping.meow.ymcheung.tw/島/猫');
      expect(siteUrl('/search?q=cats&location=東京')).toBe(
        'https://mapping.meow.ymcheung.tw/search?q=cats&location=東京'
      );
    });
  });

  // describe('environment edge cases', () => {
  //   test('should handle missing SITE_URL in development', () => {
  //     vi.stubEnv('DEV', true);
  //     vi.stubEnv('SITE', 'https://mapping.meow.ymcheung.tw');
  //     // Don't set SITE_URL
  //     delete process.env.RENDER_EXTERNAL_URL;

  //     const result = siteUrl('/test');
  //     expect(result).toBe('undefined/test');
  //   });

  //   test('should handle missing SITE in production', () => {
  //     vi.stubEnv('DEV', false);
  //     // Don't set SITE

  //     const result = siteUrl('/test');
  //     expect(result).toBe('undefined/test');
  //   });
  // });
});
