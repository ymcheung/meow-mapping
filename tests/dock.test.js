import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Dock from '@pages/_Dock.astro';

test('Render div for logo', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Dock, {});

  expect(result).toContain('<div class="logo"');
});

test('Render h1 for logo', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Dock, {
    props: {
      as: 'h1'
    }
  });

  expect(result).toContain('<h1 class="logo"');
});
