import { expect, test, describe } from 'vitest';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  INTERSECTION,
  INTERSECTION_DESCRIPTION,
  categories,
  transportations,
  type TransportationLabel
} from '@/consts';

describe('Site Constants', () => {
  describe('basic site information', () => {
    test('should have descriptive site name', () => {
      expect(SITE_NAME).toBe('Cat Spotting Guides - Meow Mapping');
      expect(SITE_NAME.length).toBeGreaterThan(0);
      expect(SITE_NAME).toContain('Cat');
    });

    test('should have meaningful site description', () => {
      expect(typeof SITE_DESCRIPTION).toBe('string');
      expect(SITE_DESCRIPTION.length).toBeGreaterThan(50);
      expect(SITE_DESCRIPTION).toContain('cat');
      expect(SITE_DESCRIPTION).toContain('Japan');
    });

    test('should have intersection branding', () => {
      expect(INTERSECTION).toBe('𝙄 𝙉 𝙏 𝙀 𝙍 𝙎 𝙀 𝘾 𝙏 𝙄 𝙊 𝙉');
      expect(typeof INTERSECTION_DESCRIPTION).toBe('string');
      expect(INTERSECTION_DESCRIPTION.length).toBeGreaterThan(0);
    });
  });
});

describe('Categories Configuration', () => {
  test('should have exactly 3 categories', () => {
    expect(categories).toHaveLength(3);
  });

  test('should have all required category properties', () => {
    categories.forEach((category, index) => {
      expect(category).toHaveProperty('slug');
      expect(category).toHaveProperty('icon');
      expect(category).toHaveProperty('en');
      expect(category).toHaveProperty('tw');

      expect(typeof category.slug).toBe('string');
      expect(category.slug.length).toBeGreaterThan(0);

      // Check English content
      expect(category.en).toHaveProperty('title');
      expect(category.en).toHaveProperty('description');
      expect(typeof category.en.title).toBe('string');
      expect(typeof category.en.description).toBe('string');

      // Check Traditional Chinese content
      expect(category.tw).toHaveProperty('title');
      expect(category.tw).toHaveProperty('description');
      expect(typeof category.tw.title).toBe('string');
      expect(typeof category.tw.description).toBe('string');
    });
  });

  test('should have correct category slugs', () => {
    const slugs = categories.map((cat) => cat.slug);
    expect(slugs).toContain('islands');
    expect(slugs).toContain('temples');
    expect(slugs).toContain('neighborhoods');
  });

  test('islands category should have correct content', () => {
    const islands = categories.find((cat) => cat.slug === 'islands');

    expect(islands).toBeDefined();
    expect(islands!.en.title).toBe('Islands');
    expect(islands!.tw.title).toBe('離島');
    expect(islands!.en.description).toContain('Cat islands');
    expect(islands!.en.description).toContain('Japan');
    expect(islands!.en.description).toContain('remote');
  });

  test('temples category should have correct content', () => {
    const temples = categories.find((cat) => cat.slug === 'temples');

    expect(temples).toBeDefined();
    expect(temples!.en.title).toBe('Temples');
    expect(temples!.tw.title).toBe('寺廟、神社');
    expect(temples!.en.description).toContain('temples');
    expect(temples!.en.description).toContain('shrines');
    expect(temples!.en.description).toContain('神社');
  });

  test('neighborhoods category should have correct content', () => {
    const neighborhoods = categories.find(
      (cat) => cat.slug === 'neighborhoods'
    );

    expect(neighborhoods).toBeDefined();
    expect(neighborhoods!.en.title).toBe('Neighborhoods');
    expect(neighborhoods!.tw.title).toBe('鄰里');
    expect(neighborhoods!.en.description).toContain('buildings');
    expect(neighborhoods!.en.description).toContain('tourism');
  });

  // test('all categories should have meaningful descriptions', () => {
  //   categories.forEach((category) => {
  //     expect(category.en.description.length).toBeGreaterThan(50);
  //     expect(category.tw.description.length).toBeGreaterThan(50);

  //     // Should contain helpful travel information
  //     expect(category.en.description.toLowerCase()).toMatch(
  //       /cat|spot|visit|travel|experience/
  //     );
  //   });
  // });
});

describe('Transportation Configuration', () => {
  test('should have all expected transportation types', () => {
    const transportationKeys = Object.keys(transportations);

    expect(transportationKeys).toContain('bicycle');
    expect(transportationKeys).toContain('ferry');
    expect(transportationKeys).toContain('motorcycle');
    expect(transportationKeys).toContain('train');
    expect(transportationKeys).toContain('walk');
    expect(transportationKeys).toContain('taxi');
  });

  test('should have exactly 6 transportation types', () => {
    expect(Object.keys(transportations)).toHaveLength(6);
  });

  test('each transportation should have an icon property', () => {
    Object.entries(transportations).forEach(([key, transport]) => {
      expect(transport).toHaveProperty('icon');
      expect(transport.icon).toBeDefined();
    });
  });

  test('transportation keys should match TransportationLabel type', () => {
    const transportationKeys = Object.keys(
      transportations
    ) as TransportationLabel[];

    // Test that we can use the keys as TransportationLabel type
    transportationKeys.forEach((key) => {
      const transport = transportations[key];
      expect(transport).toBeDefined();
      expect(transport.icon).toBeDefined();
    });
  });

  test('should support common Japanese transportation methods', () => {
    // Japan-specific transport methods that are important for cat island visits
    expect(transportations.ferry).toBeDefined(); // Essential for islands
    expect(transportations.train).toBeDefined(); // Primary transport in Japan
    expect(transportations.walk).toBeDefined(); // Common for local exploration
    expect(transportations.bicycle).toBeDefined(); // Popular in Japan
  });
});

describe('Data Structure Integrity', () => {
  test('categories array should be properly structured for iteration', () => {
    // Test that categories can be safely mapped over
    const categoryTitles = categories.map((cat) => cat.en.title);
    expect(categoryTitles).toHaveLength(3);
    expect(categoryTitles.every((title) => typeof title === 'string')).toBe(
      true
    );
  });

  test('transportations object should support key lookup', () => {
    // Test that transportations can be safely accessed by key
    const transportKeys: TransportationLabel[] = ['ferry', 'train', 'walk'];

    transportKeys.forEach((key) => {
      const transport = transportations[key];
      expect(transport).toBeDefined();
      expect(transport.icon).toBeDefined();
    });
  });

  test('categories should have consistent data structure', () => {
    // All categories should have the same structure
    const structure = ['slug', 'icon', 'en', 'tw'];

    categories.forEach((category) => {
      structure.forEach((prop) => {
        expect(category).toHaveProperty(prop);
      });

      // Check nested structure consistency
      expect(category.en).toHaveProperty('title');
      expect(category.en).toHaveProperty('description');
      expect(category.tw).toHaveProperty('title');
      expect(category.tw).toHaveProperty('description');
    });
  });
});

// describe('Content Quality', () => {
//   test('category descriptions should be informative', () => {
//     categories.forEach(category => {
//       const { en, tw } = category;

//       // English descriptions should be substantial and helpful
//       expect(en.description.split(' ').length).toBeGreaterThanOrEqual(15);
//       expect(en.description).toMatch(/[.!?]$/); // Should end with punctuation

//       // Should contain useful travel context
//       expect(en.description.toLowerCase()).toMatch(
//         /hour|day|visit|transport|experience|spot|location/
//       );
//     });
//   });

//   test('site description should be SEO-friendly', () => {
//     expect(SITE_DESCRIPTION.split(' ').length).toBeGreaterThanOrEqual(20);
//     expect(SITE_DESCRIPTION).toContain('cat');
//     expect(SITE_DESCRIPTION).toContain('travel');
//     expect(SITE_DESCRIPTION).toContain('Japan');

//     // Should be under typical meta description length
//     expect(SITE_DESCRIPTION.length).toBeLessThanOrEqual(160);
//   });

//   test('category slugs should be URL-friendly', () => {
//     categories.forEach(category => {
//       expect(category.slug).toMatch(/^[a-z]+$/); // Only lowercase letters
//       expect(category.slug).not.toContain(' '); // No spaces
//       expect(category.slug).not.toContain('_'); // No underscores
//       expect(category.slug).not.toContain('-'); // No hyphens (in this case)
//     });
//   });
// });
