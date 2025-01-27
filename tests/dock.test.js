import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Dock from '@pages/_Dock.astro';

test('Card with slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Dock, {
    props: {
      as: 'div'
    }
  });

  console.log({ result });

  expect(result).toContain('div');
});
