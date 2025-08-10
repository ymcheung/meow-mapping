import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe, beforeEach } from 'vitest';
import Dock from '@pages/_Dock.astro';

describe('Dock Component', () => {
  let container;

  beforeEach(async () => {
    container = await AstroContainer.create();
  });

  describe('basic rendering', () => {
    test('should render div for logo by default', async () => {
      const result = await container.renderToString(Dock, {});

      expect(result).toContain('<div class="logo"');
    });

    test('should render complete div element structure', async () => {
      const result = await container.renderToString(Dock, {});

      expect(result).toContain('<div class="logo"');
      expect(result).toContain('</div>');
    });

    test('should render as h1 when specified', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: 'h1'
        }
      });

      expect(result).toContain('<h1 class="logo"');
      expect(result).toContain('</h1>');
    });
  });

  describe('default behavior', () => {
    test('should default to div when no props provided', async () => {
      const result = await container.renderToString(Dock, {});

      expect(result).toContain('<div class="logo"');
      expect(result).not.toContain('<h1');
      expect(result).not.toContain('<h2');
      expect(result).not.toContain('<section');
    });

    test('should default to div when empty props provided', async () => {
      const result = await container.renderToString(Dock, {
        props: {}
      });

      expect(result).toContain('<div class="logo"');
    });

    test('should default to div when as prop is undefined', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: undefined
        }
      });

      expect(result).toContain('<div class="logo"');
    });
  });

  describe('CSS class consistency', () => {
    test('should always include logo class regardless of element type', async () => {
      const elementTypes = ['div', 'h1'];

      for (const elementType of elementTypes) {
        const result = await container.renderToString(Dock, {
          props: {
            as: elementType === 'div' ? undefined : elementType
          }
        });

        expect(result).toContain('class="logo"');
      }
    });

    test('should maintain consistent class structure', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: 'h1'
        }
      });

      // Should have exactly 'class="logo"' and not additional classes
      expect(result).toMatch(/class="logo"[^a-zA-Z-]/);
    });
  });

  describe('semantic HTML usage scenarios', () => {
    test('should be suitable for main site header', async () => {
      // When used as main site logo, h1 is appropriate
      const result = await container.renderToString(Dock, {
        props: {
          as: 'h1'
        }
      });

      expect(result).toContain('<h1 class="logo"');
      // Should be valid for accessibility as main heading
    });

    test('should be suitable for footer usage', async () => {
      // In footer, div is often appropriate
      const result = await container.renderToString(Dock, {});

      expect(result).toContain('<div class="logo"');
    });
  });

  describe('accessibility considerations', () => {
    test('should render proper heading hierarchy with h1', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: 'h1'
        }
      });

      expect(result).toContain('<h1 class="logo"');
      // h1 should be used for main page heading
    });

    test('should render proper subheading with h2', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: 'h2'
        }
      });

      expect(result).toContain('<h2 class="logo"');
      // h2 appropriate for section headings
    });

    test('should provide landmark navigation when using nav', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: 'nav'
        }
      });

      expect(result).toContain('<nav class="logo"');
      // nav provides navigation landmark for screen readers
    });
  });

  describe('integration scenarios', () => {
    test('should work in site header context', async () => {
      // Simulate usage in main site header
      const headerResult = await container.renderToString(Dock, {
        props: {
          as: 'h1'
        }
      });

      expect(headerResult).toContain('<h1 class="logo"');
      // Would typically be wrapped in <header> element
    });

    test('should work in sidebar context', async () => {
      // Simulate usage in sidebar navigation
      const sidebarResult = await container.renderToString(Dock, {
        props: {
          as: 'div'
        }
      });

      expect(sidebarResult).toContain('<div class="logo"');
    });

    test('should work in footer context', async () => {
      // Simulate usage in site footer
      const footerResult = await container.renderToString(Dock, {});

      expect(footerResult).toContain('<div class="logo"');
    });
  });

  describe('edge cases', () => {
    test('should handle invalid element types gracefully', async () => {
      // Test with potentially invalid HTML element
      const result = await container.renderToString(Dock, {
        props: {
          as: 'invalid-element'
        }
      });

      // Should still render something (likely as the invalid element)
      expect(result).toContain('class="logo"');
    });

    test('should handle empty string as element type', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: ''
        }
      });

      // Should handle empty string gracefully
      expect(result).toContain('class="logo"');
    });

    test('should handle null as element type', async () => {
      const result = await container.renderToString(Dock, {
        props: {
          as: null
        }
      });

      // Should default to div behavior
      expect(result).toContain('<div class="logo"');
    });
  });

  // describe('content and slot handling', () => {
  //   test('should render slot content when provided', async () => {
  //     const result = await container.renderToString(Dock, {
  //       props: {
  //         as: 'h1'
  //       },
  //       slots: {
  //         default: 'Meow Mapping - Cat Spotting Guide'
  //       }
  //     });

  //     expect(result).toContain('Meow Mapping - Cat Spotting Guide');
  //   });

  //   test('should handle complex HTML in slot', async () => {
  //     const complexContent = `
  //       <span>Cat Spotting</span>
  //       <small>Travel Guide</small>
  //     `;

  //     const result = await container.renderToString(Dock, {
  //       props: {
  //         as: 'div'
  //       },
  //       slots: {
  //         default: complexContent
  //       }
  //     });

  //     expect(result).toContain('<span>Cat Spotting</span>');
  //     expect(result).toContain('<small>Travel Guide</small>');
  //   });

  //   test('should handle empty slot content', async () => {
  //     const result = await container.renderToString(Dock, {
  //       props: {
  //         as: 'h1'
  //       },
  //       slots: {
  //         default: ''
  //       }
  //     });

  //     expect(result).toContain('<h1 class="logo"');
  //     expect(result).toContain('</h1>');
  //   });
  // });

  // describe('cat spotting site specific usage', () => {
  //   test('should be suitable for main site branding', async () => {
  //     const result = await container.renderToString(Dock, {
  //       props: {
  //         as: 'h1'
  //       },
  //       slots: {
  //         default: 'Cat Spotting Guides - Meow Mapping'
  //       }
  //     });

  //     expect(result).toContain('<h1 class="logo"');
  //     expect(result).toContain('Cat Spotting Guides - Meow Mapping');
  //   });

  //   test('should work with navigation logo', async () => {
  //     const result = await container.renderToString(Dock, {
  //       props: {
  //         as: 'nav'
  //       },
  //       slots: {
  //         default: '🐱 Meow Mapping'
  //       }
  //     });

  //     expect(result).toContain('<nav class="logo"');
  //     expect(result).toContain('🐱 Meow Mapping');
  //   });
  // });
});
