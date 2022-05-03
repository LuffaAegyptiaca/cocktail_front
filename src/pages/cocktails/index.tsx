import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import * as React from 'react';
import { useRouter } from 'next/router';

import { Cocktail } from '../types/cocktail';
import Page from '../../components/Page';
import dummyCocktails from '../../dummy/cocktails';

type GridColumn = {
  field: string,
  headerName: string,
  width: number,
};

const columns: GridColDef<GridColumn>[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Cocktail Name', width: 600 },
  { field: 'alcohol', headerName: 'Alcohol (%)', width: 100 },
];

const rows: GridRowsProp = dummyCocktails;

export default function CocktailListPage(): JSX.Element {
  const router = useRouter();
  const handleClick = React.useCallback((row: GridRowParams<Cocktail>, e: React.MouseEvent) => {
    e.preventDefault();
    void router.push(`cocktails/${ row.id }`);
  }, [router]);
  return (
    <Page>
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={ columns }
          disableSelectionOnClick
          rows={ rows }
          onRowClick={ handleClick }
        />
      </div>
    </Page>
  );
}
