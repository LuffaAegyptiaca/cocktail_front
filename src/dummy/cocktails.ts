import { Cocktail } from '../types/cocktail';

const cocktails: Cocktail[] = [
  {
    id: 1,
    name: 'ジントニック',
    alcohol: 14,
    style: 'ビルド',
    ingredients: [
      {
        name: 'ドライ・ジン',
        amount: 45,
        unit: 'ml',
      },
      {
        name: 'トニックウォーター',
        amount: 100,
        unit: 'ml',
      },
      {
        name: 'ライム',
        amount: 1,
        unit: '切れ',
      },
    ],
  },
  {
    id: 2,
    name: 'モスコミュール',
    alcohol: 15,
    style: 'ビルド',
    ingredients: [
      {
        name: 'ウォッカ',
        amount: 30,
        unit: 'ml',
      },
      {
        name: 'ライムジュース',
        amount: 10,
        unit: 'ml',
      },
      {
        name: 'ジンジャーエール',
        amount: 100,
        unit: 'ml',
      },
      {
        name: 'ライム',
        amount: 1,
        unit: '切れ',
      },
    ],
  },
];

export default cocktails;
