import { DataGrid, GridColumns, GridRowParams, GridRowsProp } from '@material-ui/data-grid';
import * as React from 'react';
import { useRouter } from 'next/router';

import Page from '../../components/Page';
import dummyCocktails from '../../dummy/cocktails';

const columns = [
  { field: 'name', headerName: 'Cocktail Name', width: 600 },
] as GridColumns;

const rows = dummyCocktails as GridRowsProp;

export default function CocktailListPage(): JSX.Element {
  const router = useRouter();
  const handleClick = React.useCallback((row: GridRowParams, e: React.MouseEvent) => {
    e.preventDefault();
    void router.push(`cocktails/${row.id}`);
  }, [router]);
  return (
    <Page>
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={columns}
          disableSelectionOnClick
          rows={rows}
          onRowClick={handleClick}
        />
      </div>
    </Page>
  );
}
