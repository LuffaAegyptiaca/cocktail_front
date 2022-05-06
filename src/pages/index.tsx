import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from '@mui/x-data-grid';
import { GetStaticProps } from 'next';
import * as React from 'react';
import Link from 'next/link';

import { Cocktail } from '../types/cocktail';
import Page from '../components/Page';
import dummyCocktails from '../dummy/cocktails';


export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      cocktails: dummyCocktails,
    },
    revalidate: 60,
  };
};

type GridColumn = {
  field: string,
  headerName: string,
  width: number,
};

const NameCell = (params: GridRenderCellParams<string>) => (
  <Link href={ { pathname: '/cocktails/[id]', query: { id: params.id }} }>{ params.value }</Link>
);

const columns: GridColDef<GridColumn>[] = [
  {
    field: 'name',
    headerName: 'カクテル',
    width: 600,
    renderCell: NameCell,
  },
  { field: 'alcohol', headerName: 'alc (%)', width: 100 },
];

type Props = {
  cocktails: Cocktail[],
};

const CocktailListPage: React.FC<Props> = ({ cocktails }) => (
  <Page>
    <div
    style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={ columns }
        disableSelectionOnClick
        rows={ cocktails as GridRowsProp }
      />
    </div>
  </Page>
);

export default CocktailListPage;
