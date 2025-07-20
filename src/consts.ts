import Islands from '@assets/islands.svg';
import Temples from '@assets/temples.svg';
import Streets from '@assets/buildings.svg';
import Bicycle from '@assets/bicycle.svg';
import Ferry from '@assets/ferry.svg';
import Motorcycle from '@assets/motorcycle.svg';
import Train from '@assets/train.svg';
import Walk from '@assets/walk.svg';
import Taxi from '@assets/taxi.svg';

export const SITE_URL = 'https://meow.carrier.express';
export const SITE_NAME = 'Cat Spotting Guides - Meow Mapping';
export const SITE_DESCRIPTION =
  'Discover authentic travel experiences at some of the best cat spots, focusing on how to get to these destinations instead of just basic information. Primarily featured in Japan, these unique locales offer a chance to immerse yourself in the region with cats.';
export const INTERSECTION = '𝙄 𝙉 𝙏 𝙀 𝙍 𝙎 𝙀 𝘾 𝙏 𝙄 𝙊 𝙉';
export const INTERSECTION_DESCRIPTION =
  '優化、插件、高清、視頻、反饋、交互設計：已經看膩這些中國用語。';

export const categories = [
  {
    slug: 'islands',
    icon: Islands,
    en: {
      title: 'Islands',
      description:
        'Cat Islands in Japan are often remote from tourism spots. Even reaching the ports takes hours of common transportations like trains. To make the experience of the trips immersive, it is recommend to stay in the islands for 1 or 2 days.'
    },
    tw: {
      title: '離島',
      description:
        'Cat Islands in Japan are often remote from tourism spots. Even reaching the ports takes hours of common transportations like trains. To make the experience of the trips immersive, it is recommend to stay in the islands for 1 or 2 days.'
    }
  },
  {
    slug: 'temples',
    icon: Temples,
    en: {
      title: 'Temples',
      description:
        'Many temples and shrines (神社) take care of cats. As they become more famous, they may offer omamori (protective charms) or goshuin stamps for you to collect as memories.'
    },
    tw: {
      title: '寺廟神社',
      description:
        'Many temples and shrines (神社) take care of cats. As they become more famous, they may offer omamori (protective charms) or goshuin stamps for you to collect as memories.'
    }
  },
  {
    slug: 'neighborhoods',
    icon: Streets,
    en: {
      title: 'Neighborhoods',
      description:
        'These are the spots with cats living among the buildings. For the neighborhoods I have visited so far, you could find the cats in a tourism spot, a hiking trail, and a tiny town.'
    },
    tw: {
      title: '鄰里',
      description:
        'These are the spots with cats living among the buildings. For the neighborhoods I have visited so far, you could find the cats in a tourism spot, a hiking trail, and a tiny town.'
    }
  }
];

export const transportations = {
  bicycle: {
    icon: Bicycle
  },
  ferry: {
    icon: Ferry
  },
  motorcycle: {
    icon: Motorcycle
  },
  train: {
    icon: Train
  },
  walk: {
    icon: Walk
  },
  taxi: {
    icon: Taxi
  }
} as const;

export type TransportationLabel = keyof typeof transportations;
