import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';

import { Cocktail } from '../../types/cocktail';
import Page from '../../components/Page';
import dummyCocktails from '../../dummy/cocktails';

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params == null) {
    return { props: {} };
  }
  const idAsString = params.id;
  if (typeof idAsString !== 'string') {
    return { props: {} };
  }
  const _id = Number(idAsString);
  const item = dummyCocktails.find(({ id }) => id === _id);
  return {
    props: {
      cocktail: item,
    },
    revalidate: 10,
  };
}

export default function CocktailPage({ cocktail }: { cocktail: Cocktail }): JSX.Element {
  return (
    <Page>
      <>
        <h2>{ cocktail.name }</h2>
        <table>
          <tbody>
            <tr>
              <td>アルコール度数</td>
              <td>{ cocktail.alcohol } %</td>
            </tr>
            <tr>
              <td>スタイル</td>
              <td>{ cocktail.style }</td>
            </tr>
          </tbody>
        </table>
        <h3>材料</h3>
        <table>
          <tbody>
            { cocktail.ingredients.map((ingredient, idx) => (
              <tr key={ idx }>
                <td>{ ingredient.name }</td>
                <td>{ ingredient.amount }{ ingredient.unit }</td>
              </tr>
            )) }
          </tbody>
        </table>
      </>
    </Page>
  );
}