export type Ingredient = {
  name: string,
  amount: number,
  unit: string,
};

export type Cocktail = {
  id: number,
  name: string,
  alcohol: number,
  style: string,
  ingredients: Ingredient[],
};
