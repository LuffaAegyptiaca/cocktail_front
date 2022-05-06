import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from '@mui/x-data-grid';
import * as React from 'react';
import Link from 'next/link';

import Page from '../../components/Page';
import dummyCocktails from '../../dummy/cocktails';

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
    headerName: 'Cocktail Name',
    width: 600,
    renderCell: NameCell,
  },
  { field: 'alcohol', headerName: 'Alcohol (%)', width: 100 },
];

const rows: GridRowsProp = dummyCocktails;

const CocktailListPage: React.FC = () => (
  <Page>
    <div
    style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={ columns }
        disableSelectionOnClick
        rows={ rows }
      />
    </div>
  </Page>
);

export default CocktailListPage;
